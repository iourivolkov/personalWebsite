import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 40px;
  cursor: pointer;
`;

export const ProjectCardButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  font-family: inter-regular;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: #fff;
    border: none;
    background-color: black;
  }
`;

export const TechStack = styled.p`
  font-family: inter-regular;
  font-size: 14px;
  margin-top: 10px;
  text-transform: capitalize;
`;

export const CardSubHeading = styled.h4`
  font-family: inter-medium;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const CardHeading = styled.h2`
  font-family: inter-regular;
  font-size: 14px;
  max-width: 30ch;
`;

export const CardText = styled.p`
  font-family: inter-thin;
  font-size: 16px;
  max-width: 40ch;
  margin-top: 5px;
`;

export const CardButton = styled.a`
  font-family: inter-regular;
  font-size: 16px;
  padding-top: 10px;
  text-decoration: underline;
`;

export const WorkedOn = styled.p`
  font-family: inter-regular;
  font-size: 14px;
  margin-top: 10px;
`;
