import { styled } from "styled-components";

export const FooterContactContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px; */
  /* display: grid; */
`;

export const FooterContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  margin: 40px 40px 40px 40px;
`;

export const FooterNavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: auto;
  width: 300px;
`;

export const FooterInfoHeading = styled.h2`
  font-family: inter-medium;

  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: 10px;
  letter-spacing: -1px;
`;

export const FooterHeading = styled.h1`
  font-family: inter-medium;
  color: #000;
  text-transform: capitalize;

  margin: 40px;
`;

export const FooterSocialsHeading = styled.h2`
  font-family: inter-medium;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 10px;
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterInfoLink = styled.div`
  font-family: inter-medium;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: -1px;
`;

export const FooterSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterSocialLink = styled.p`
  font-family: inter-medium;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: -1px;
`;

export const BottomFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLogo = styled.h2`
  text-transform: uppercase;
  font-family: inter-medium;
  letter-spacing: -1px;
  font-size: 14px;
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
