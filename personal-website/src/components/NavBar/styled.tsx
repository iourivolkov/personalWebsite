import { styled } from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const NavigationItem = styled.li<{ menuOpen?: boolean }>`
  font-family: inter-black;
  margin: 40px;
  cursor: pointer;
  font-size: 16px;
  z-index: 10000;
  color: ${(props) => (props.menuOpen ? "#fff" : "#000000")};
`;
