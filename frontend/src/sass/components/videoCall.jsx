import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
`;
export const CallButton = styled.div`
  button {
    width: 5vw;
    height: 10vh;
    border-radius: 50%;
    border: 5px solid white;
    background: #55d6be;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const Video = styled.video`
  margin: 0.75%;
  width: 40%;
  height: 48vh;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid #0a040a35;
`;
export const AcceptCall = styled.div`
  display: flex;
  flex-direction: column;
  .acceptButton {
    border: 5px solid white;
    background-color: #ffbc42;
    margin-top: 5%;
    width: 5vw;
    height: 10vh;
    border-radius: 50%;
  }
  .closeButton {
    border: 5px solid white;
    background-color: #d81159;
    margin-top: 5%;
    width: 5vw;
    height: 10vh;
    border-radius: 50%;
  }
  h1 {
    position: absolute;
    bottom: 100%;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  padding: 1%;
  border-radius: 60px;
  background-color: #440044;
  width: 7%;
  left: 47%;
  top: 40%;
  display: flex;
  flex-direction: column;
`;
export const SpeechContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75%;
  position: absolute;
  right: 0;
  border: 5px solid #0a040a35;
  border-radius: 10px;
  width: 40%;
  height: 48vh;
  background-color: #3C153B;
`;
export const SignTranslation = styled.div`
 display:flex ;
align-items:center ;
flex-direction:column ;
padding:15px ;
  margin: 0.75%;
  position: absolute;
  bottom:0;
  right:0;
  border:5px solid #0a040a35;
  border-radius: 10px;
  width:40%;
  height:48vh;
  background-color: #3C153B;
  button{
    margin-top:10px;
    height:5vh;
    padding:5px;
    border-radius:50px;
  }
  p{
    margin-bottom:5px ;
    font-size:1.2rem ;
    
    color:white ;
  }
`