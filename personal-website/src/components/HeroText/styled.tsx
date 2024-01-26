import { styled } from "styled-components";
import "../../styles/fonts.css";

export const HeroParagraph = styled.p`
  font-family: inter-regular;
  font-size: 220px;
  text-transform: uppercase;
  max-width: 20ch;
  margin: 200px auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    max-width: 15ch;
  }
`;

export const HeroText1 = styled.span`
  font-family: inter-black;
  font-size: 120px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    max-width: 10ch;
  }
`;

/* @TODO - flesh out logic for this span*/
export const InteractiveSpan = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
    text-decoration: underline;
  }
`;
