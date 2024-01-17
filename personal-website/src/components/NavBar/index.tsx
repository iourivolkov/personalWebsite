import { Navigation, NavigationItem } from "./styled";
import { useState } from "react";
import MenuOpen from "../MenuOpen";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navigation>
        <NavigationItem menuOpen={isMenuOpen}>IOURIVOLKOV</NavigationItem>
        {isMenuOpen && <MenuOpen />}
        <NavigationItem menuOpen={isMenuOpen} onClick={handleMenuOpen}>
          {isMenuOpen ? "Close" : "Menu"}
        </NavigationItem>
      </Navigation>
    </>
  );
};

export default NavBar;
