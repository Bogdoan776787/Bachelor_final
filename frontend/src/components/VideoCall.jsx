import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { FiPhoneCall, FiPhoneOff,FiCheck } from "react-icons/fi";
import {
  Container,
  Video,
  CallButton,
  VideoContainer,
  AcceptCall,
  ButtonContainer,
  SpeechContainer,
  SignTranslation,
} from "../sass/components/videoCall";
import SpeechConvert from "./SpeechConvert";
function VideoCall() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("ws://localhost:8001");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: "stun:numb.viagenie.ca",
            username: "776787novac@gmail.com",
            credential: "1122334444",
          },
          {
            urls: "turn:numb.viagenie.ca",
            username: "776787novac@gmail.com",
            credential: "1122334444",
          },
        ],
      },
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.current.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }
  function closeCall() {
    setCallAccepted(false);
  }
  let UserVideo;
  if (stream) {
    UserVideo = <Video playsInline muted ref={userVideo} autoPlay />;
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <Video playsInline ref={partnerVideo} autoPlay />;
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <AcceptCall>
        {/* <h1>{caller} is calling you</h1> */}
        <button className="acceptButton" onClick={acceptCall}>
          <FiCheck size={25}/>
        </button>
        <button className="closeButton" onClick={closeCall}>
          <FiPhoneOff size={25} />
        </button>
      </AcceptCall>
    );
  }

  return (
    <Container>
      <VideoContainer>
        {UserVideo}
        {PartnerVideo}
      </VideoContainer>
      <ButtonContainer>
        <CallButton>
          {Object.keys(users).map((key) => {
            if (key === yourID) {
              return null;
            }
            return (
              <button onClick={() => callPeer(key)}>
                <FiPhoneCall size={25} />{" "}
              </button>
            );
          })}
        </CallButton>
        <AcceptCall>{incomingCall}</AcceptCall>
      </ButtonContainer>
      <SpeechContainer>
        <SpeechConvert />
      </SpeechContainer>
      <SignTranslation>
        <p>Sign Language</p>
        <button>Set Sign Translation</button>
      </SignTranslation>
    </Container>
  );
}

export default VideoCall;
