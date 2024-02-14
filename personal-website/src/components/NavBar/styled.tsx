import { styled } from "styled-components";

export const Navigation = styled.ul<{ isScrolling?: boolean }>`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
`;

export const NavigationItem = styled.li<{
  menuOpen?: boolean;
  mobile?: boolean;
  tablet?: boolean;
}>`
  font-family: inter-medium;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 40px 100px 40px 60px;
  cursor: pointer;
  font-size: 14px;
  z-index: 10000000;
  /* display: ${(props) => (!props.mobile || !props.tablet ? "" : "none")}; */
  color: ${(props) => (props.menuOpen ? "#fff" : "#000000")};

  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-family: inter-black;
  }
`;
