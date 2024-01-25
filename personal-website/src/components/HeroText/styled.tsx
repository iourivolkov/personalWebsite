import { styled } from "styled-components";
import "../../styles/fonts.css";

export const HeroParagraph = styled.p`
  font-family: inter-regular;
  font-size: 220px;
  text-transform: uppercase;
  max-width: 20ch;
  /* margin: 100px auto 150px auto; */
  margin: 200px auto;
  text-align: center;
`;

export const HeroText1 = styled.span`
  font-family: inter-black;
  font-size: 120px;
`;

/* @TODO - flesh out logic for this span*/
export const InteractiveSpan = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
    text-decoration: underline;
  }
`;
