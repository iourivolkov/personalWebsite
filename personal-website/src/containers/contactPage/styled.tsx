import { styled } from "styled-components";

export const ContactPageContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 20px 40px 100px 40px; */

  margin: 20px 40px 100px 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const ContactHeading = styled.h1`
  font-size: 48px;
  letter-spacing: -1px;
  text-transform: capitalize;
  font-family: inter-medium;
  max-width: 10ch;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    padding-bottom: 40px;
  }
`;

export const ContactLinks = styled.h2`
  font-size: 28px;
  margin: auto;
  letter-spacing: -1px;
  text-transform: capitalize;
  font-family: inter-regular;
  text-align: right;
  color: #000;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ContactLinkSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;

  @media screen and (max-width: 768px) {
    gap: 4rem;
  }
`;

export const ContactLinksText = styled.button`
  width: 120px;
  height: 40px;
  border: 0.5px solid black;
  background-color: #fff;
  color: black;
  font-family: inter-regular;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 10px; */
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ContactLinkBreak = styled.hr<{ isMenuOpen: boolean }>`
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
  display: ${(props) => props.isMenuOpen && "none"};
`;
