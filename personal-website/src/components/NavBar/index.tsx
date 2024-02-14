import { Navigation, NavigationItem } from "./styled";
import { useState, useEffect } from "react";
import MenuOpen from "../MenuOpen";
import { usePersonalWebsiteStore } from "@/store/personalWebsiteStore";

const NavBar = () => {
  const { isMenuOpen, setIsMenuOpen } = usePersonalWebsiteStore();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // remove if don't want to change nav background on scroll
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1072);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeOpenMenu = () => {
    setIsMenuOpen(false);
  };

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  // when screen size === isMobile || isTablet -> menu btn visible && menuOpen bar slides down when clicked
  // when screen size > isTablet -> menu btn invisible -> nav items shown instead

  return (
    <>
      <Navigation isScrolling={isScrolling}>
        <NavigationItem onClick={scrollToTop} menuOpen={isMenuOpen}>
          iourivolkov
        </NavigationItem>
        {isMenuOpen && (
          // && (isMobile || isTablet)
          <MenuOpen isMenuOpen={isMenuOpen} closeMenu={closeOpenMenu} />
        )}
        <NavigationItem
          menuOpen={isMenuOpen}
          onClick={handleMenuOpen}
          mobile={isMobile}
          tablet={isTablet}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </NavigationItem>
      </Navigation>
    </>
  );
};

export default NavBar;
