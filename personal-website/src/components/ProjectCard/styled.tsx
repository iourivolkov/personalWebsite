import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  align-items: start;
  border-radius: 20px;
  border: 0.1px solid lightgrey;
  margin: 40px;
  cursor: pointer;
`;

export const CardImageContainer = styled.div`
  width: 550px;
  height: 650px;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CardHeading = styled.h2`
  font-family: inter-regular;
  font-size: 20px;
`;

export const CardText = styled.p`
  font-family: inter-thin;
  font-size: 16px;
  max-width: 50ch;
  margin-top: 5px;
`;
