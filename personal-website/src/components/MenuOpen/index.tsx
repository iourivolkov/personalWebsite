import {
  MenuContainer,
  MenuNavigation,
  MenuSocialsContainer,
  MenuSocialLink,
} from "./styled";
import Link from "next/link";

const MenuOpen = ({ closeMenu }: any) => {
  return (
    <MenuContainer>
      <Link style={{ textDecoration: "none" }} href="#home">
        <MenuNavigation>home</MenuNavigation>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        href="#projects"
        onClick={closeMenu}
      >
        <MenuNavigation>projects</MenuNavigation>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        href="#about"
        onClick={closeMenu}
      >
        <MenuNavigation>about</MenuNavigation>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        href="#contact"
        onClick={closeMenu}
      >
        <MenuNavigation>contact</MenuNavigation>
      </Link>
      <MenuSocialsContainer>
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/iourivolkov/"
        >
          <MenuSocialLink>LinkedIn</MenuSocialLink>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="https://resume.creddle.io/resume/h3w9zyogj17"
        >
          <MenuSocialLink>Resume</MenuSocialLink>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/ayureeeeee/"
        >
          <MenuSocialLink>Instagram</MenuSocialLink>
        </Link>
      </MenuSocialsContainer>
    </MenuContainer>
  );
};

export default MenuOpen;
