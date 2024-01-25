import { Navigation, NavigationItem } from "./styled";
import { useState, useEffect } from "react";
import MenuOpen from "../MenuOpen";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollStatus = () => {
      setIsScrolling(window.scrollY >= 10);
    };
    window.addEventListener("scroll", scrollStatus);
    return () => {
      window.removeEventListener("scroll", scrollStatus);
    };
  }, []);

  // useEffect(() => {
  //   const handleScrollLock = () => {
  //     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

  //     handleScrollLock();
  //   };
  // }, [isMenuOpen]);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeOpenMenu = () => {
    setIsMenuOpen(false);
  };

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navigation isScrolling={isScrolling}>
        <NavigationItem onClick={scrollToTop} menuOpen={isMenuOpen}>
          IOURIVOLKOV
        </NavigationItem>
        {isMenuOpen && <MenuOpen closeMenu={closeOpenMenu} />}
        <NavigationItem menuOpen={isMenuOpen} onClick={handleMenuOpen}>
          {isMenuOpen ? "Close" : "Menu"}
        </NavigationItem>
      </Navigation>
    </>
  );
};

export default NavBar;
