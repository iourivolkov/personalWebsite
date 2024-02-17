import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: white;
  border: 0.5px solid black;
  position: fixed;
  right: 0;
  top: 0;
  gap: 50px;
  z-index: 1000;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ModalCloseButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border: 1px solid red;
  color: red;
  font-family: inter-regular;
  font-size: 12px;
  border-radius: 20px;
  top: 120px;
  right: 40px;
  cursor: pointer;
  /* margin-top: 20px; */
  position: absolute;

  &:hover {
    color: #fff;
    border: none;
    background-color: red;
  }
`;

export const ModalSectionTitle = styled.p`
  font-family: inter-medium;
  letter-spacing: -1px;
  color: black;
  margin: 10px;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 100px;
  width: 70ch;
`;

export const ModalHeading = styled.h1`
  font-family: inter-medium;
  font-size: 60px;
  margin-bottom: 40px;
`;

export const ModalSubheading = styled.p`
  font-family: inter-regular;
  letter-spacing: -1px;
  margin: 10px;
  font-size: 24px;
  width: 40ch;
`;

export const ModalButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  font-family: inter-regular;
  font-size: 12px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: #fff;
    border: none;
    background-color: black;
  }
`;

export const ModalImageContainer = styled.div`
  margin: 0 0 100px 100px;
`;
