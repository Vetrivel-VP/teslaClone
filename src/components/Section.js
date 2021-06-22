import React from "react";
import Styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.desscription}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftButton}</LeftButton>
            {/* Display the right button only if the button is passed from the home.js */}
            {props.rightButton && (
              <RightButton>{props.rightButton}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = Styled.div`
    width  : 100vw;
    height  : 100vh;
    background : ${(props) => `url("/images/${props.bgImage}")`};
    background-size : cover;
    background-position : center;
    background-repeat: no-repeat;
    display : flex;
    justify-content: space-between;
    align-items : center;
    flex-direction: column;
`;

const ItemText = Styled.div`
    padding-top : 15vh;
    text-align :  center;
`;

const Buttons = Styled.div`
`;

const ButtonGroup = Styled.div`
    display : flex;
    margin-bottom : 30px;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const LeftButton = Styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor : pointer;
    margin : 8px;
`;

const RightButton = Styled(LeftButton)`
    background : white;
    opacity : 0.65;
    color : black;
`;

const DownArrow = Styled.img`
    height : 40px;
    overflow-x: hidden !important;
    animation : animateDown infinite 1.5s;
`;
