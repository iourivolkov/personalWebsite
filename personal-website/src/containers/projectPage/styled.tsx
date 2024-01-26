import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const ProjectPageHeading = styled.h1`
  font-family: inter-black;
  font-size: 96px;
  margin: 40px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;
