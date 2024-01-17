import { MenuContainer, MenuNavigation } from "./styled";

// @TODO - add smooth scrollTo navigation to menuNav items

const MenuOpen = () => {
  return (
    <MenuContainer>
      <MenuNavigation>home</MenuNavigation>
      <MenuNavigation>projects</MenuNavigation>
      <MenuNavigation>about</MenuNavigation>
      <MenuNavigation>contact</MenuNavigation>
    </MenuContainer>
  );
};

export default MenuOpen;
