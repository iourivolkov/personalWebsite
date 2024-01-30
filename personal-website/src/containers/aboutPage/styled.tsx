import { styled } from "styled-components";

export const AboutPageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 40px 0px 40px;
  gap: 5rem;
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutHeading = styled.h1`
  font-family: inter-medium;
  text-transform: capitalize;
  letter-spacing: -1px;
  font-size: 36px;
  margin-bottom: 50px;
  max-width: 8ch;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    max-width: 20ch;
  }
`;

export const AboutText = styled.p`
  font-family: inter-regular;
  letter-spacing: -1px;
  font-size: 95px;
  max-width: 50ch;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutImageContainer = styled.div`
  max-height: 300px;
  max-width: 500px;
  margin: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
