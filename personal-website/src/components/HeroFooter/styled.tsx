import "../../styles/fonts.css";

import { styled } from "styled-components";

export const HeroFooterText1 = styled.p`
  font-size: 24px;
  text-decoration: underline;
  font-weight: lighter;
  font-family: inter-thin;
  position: relative;
  margin: auto;
`;

export const HeroFooterSpan = styled.span`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: inter-black;
`;

export const HeroFooterContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  margin-top: 10%;
`;
