import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 40px 40px 40px;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLogo = styled.h2`
  text-transform: uppercase;
  font-family: inter-black;
  font-size: 16px;
`;

export const FooterText = styled.p`
  font-family: inter-thin;
  font-size: 16px;
  cursor: pointer;
`;

export const FooterButton = styled.button`
  border-radius: 50%;
  color: #fff;
  background-color: #000;
  height: 40px;
  width: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inter-black;
  cursor: pointer;
`;
