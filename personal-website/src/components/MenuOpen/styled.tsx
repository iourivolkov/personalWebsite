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
  z-index: 900;
  overflow: hidden;
`;

export const MenuNavigation = styled.p`
  font-family: inter-black;
  color: #787878;
  text-transform: uppercase;
  font-size: 96px;
  cursor: pointer;
  line-height: 85%;
  text-decoration: none;

  &:hover {
    color: #fff;
    transform: skew(-0.04turn);
    transition: all 0.2s ease-in-out;
  }
`;

export const MenuSocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 50px 40px;
  align-items: start;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const MenuSocialLink = styled.p`
  font-family: inter-regular;
  text-transform: uppercase;
  font-size: 20px;
  color: #efefef52;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
