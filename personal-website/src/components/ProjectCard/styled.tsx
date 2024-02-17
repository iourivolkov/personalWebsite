import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  /* margin: 40px; */
  margin: 40px 0 0 0;
  width: 400px;
  /* height: 500px;
  width: 400px; */
`;

export const CardHr = styled.hr`
  width: 100%;
  background-color: lightgrey;
  margin: 60px 0 0 0;
`;

export const ProjectCardButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  font-family: inter-regular;
  font-size: 12px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: #fff;
    border: none;
    background-color: black;
  }
`;

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const CardModalButton = styled.button`
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

export const TechStack = styled.p`
  font-family: inter-regular;
  font-size: 14px;
  margin-top: 10px;
  text-transform: capitalize;
`;

export const CardSubHeading = styled.h4`
  font-family: inter-regular;
  font-size: 24px;
  margin-bottom: 10px;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const CardHeading = styled.h2`
  font-family: inter-regular;
  font-size: 14px;
  /* max-width: 30ch; */
`;

export const CardText = styled.p`
  font-family: inter-regular;
  font-size: 16px;
  /* max-width: 40ch; */
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
