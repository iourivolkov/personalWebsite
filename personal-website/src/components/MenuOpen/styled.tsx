import { styled } from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const MenuNavigation = styled.p`
  font-family: inter-black;
  color: #787878;
  text-transform: uppercase;
  font-size: 96px;
  cursor: pointer;
  line-height: 85%;

  &:hover {
    color: #fff;
  }
`;
