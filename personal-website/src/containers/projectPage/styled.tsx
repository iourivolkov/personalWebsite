import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProjectPageHeading = styled.h1`
  font-family: inter-medium;
  text-transform: capitalize;
  letter-spacing: -1px;
  font-size: 36px;
  text-align: center;
  /* margin: 40px; */

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const ProjectPageContainer = styled.div`
  height: 100vh;
`;
