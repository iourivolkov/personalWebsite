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

  /* @media screen and (min-width: 1072px) {
    display: none;
  } */
`;

export const MenuNavigation = styled.p`
  font-family: inter-black;
  color: #787878;
  text-transform: uppercase;
  font-size: 96px;
  cursor: pointer;
  line-height: 85%;
  text-decoration: none;
  letter-spacing: -2px;

  &:hover {
    color: #fff;
    transform: skew(-0.04turn);
    transition: all 0.2s ease-in-out;
  }

  /* @media screen and (max-width: 768px) {
    font-size: 64px;
  } */

  /* @media screen and (min-width: 1072px) {
    display: none;
  } */
`;

export const MenuSocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 50px 40px;
  align-items: start;
  position: relative;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 768px) {
    align-self: center;
    bottom: 40px;
    left: auto;
  }

  /* @media screen and (min-width: 1072px) {
    display: none;
  } */
`;

export const MenuSocialLink = styled.p`
  font-family: inter-medium;
  text-transform: uppercase;
  font-size: 12px;
  color: #efefef52;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  /* @media screen and (min-width: 1072px) {
    display: none;
  } */
`;
