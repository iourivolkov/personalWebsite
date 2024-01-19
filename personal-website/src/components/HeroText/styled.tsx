import { styled } from "styled-components";

export const HeroParagraph = styled.p`
  font-family: inter-regular;
  font-size: 96px;
  text-transform: uppercase;
  max-width: 20ch;
  /* margin: 200px auto 0 auto; */
  margin: 100px auto;
  text-align: left;
`;

export const HeroText1 = styled.span`
  font-family: inter-black;
  font-size: 96px;
`;

/* @TODO - flesh out logic for this span*/
export const InteractiveSpan = styled.span`
  &:hover {
    color: red;
  }
`;
