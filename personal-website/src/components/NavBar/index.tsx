import { Navigation, NavigationItem } from "./styled";
import { useState } from "react";
import MenuOpen from "../MenuOpen";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeOpenMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navigation>
        <NavigationItem menuOpen={isMenuOpen}>IOURIVOLKOV</NavigationItem>
        {isMenuOpen && <MenuOpen closeMenu={closeOpenMenu} />}
        <NavigationItem menuOpen={isMenuOpen} onClick={handleMenuOpen}>
          {isMenuOpen ? "Close" : "Menu"}
        </NavigationItem>
      </Navigation>
    </>
  );
};

export default NavBar;
