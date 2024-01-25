import { styled } from "styled-components";

export const Navigation = styled.ul<{ isScrolling?: boolean }>`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: fixed;
  top: 0px;
  width: 100%;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease-in-out;
`;

export const NavigationItem = styled.li<{ menuOpen?: boolean }>`
  font-family: inter-black;
  margin: 40px 100px 40px 60px;
  cursor: pointer;
  font-size: 16px;
  z-index: 10000000;
  color: ${(props) => (props.menuOpen ? "#fff" : "#000000")};
`;
