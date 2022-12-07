import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import { FiMic, FiMicOff, FiRotateCcw } from "react-icons/fi";

const SpeechConvert = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  console.log({ transcript });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Fragment>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <ButtonContainer>
        <button
          className="startListen"
          onClick={SpeechRecognition.startListening}
        >
          <FiMic size={20} />
        </button>
        <button
          className="stopListen"
          onClick={SpeechRecognition.stopListening}
        >
          <FiMicOff size={20} />
        </button>
        <button className="resetTranscript" onClick={resetTranscript}>
          <FiRotateCcw size={20} />
        </button>
      </ButtonContainer>

      <p>{transcript}</p>
    </Fragment>
  );
};
export default SpeechConvert;
const ButtonContainer = styled.div`
  width: 15vw;
  border: 3px solid #320930;
  border-radius: 50px;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e0e4c;
  .startListen {
    width: 4vw;
    height: 5vh;
    border-radius: 50px;
    background-color: #55d6be;
  }
  .stopListen {
    width: 4vw;
    height: 4vh;
    width: 4vw;
    height: 5vh;
    border-radius: 50px;
    background-color: #d81159;
  }
  .resetTranscript {
    width: 4vw;
    height: 4vh;
    width: 4vw;
    height: 5vh;
    border-radius: 50px;
    background-color: #ffbc42;
  }
`;
const Fragment = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;

  p {
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: white;
  }
`;
