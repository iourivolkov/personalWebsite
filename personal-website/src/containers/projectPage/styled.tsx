import { styled } from "styled-components";

export const ProjectPageContainer = styled.div`
  height: 100vh;
  margin-top: 100px;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectPageHeading = styled.h1`
  font-family: inter-medium;
  text-transform: capitalize;
  letter-spacing: -1px;
  font-size: 60px;
  text-align: center;
  margin-bottom: 40px;
  /* margin-top: 100px; */
  /* margin: 40px; */

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;
