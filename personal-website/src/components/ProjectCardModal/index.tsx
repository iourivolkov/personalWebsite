import {
  ModalContainer,
  ModalHeading,
  ModalSubheading,
  ModalButton,
  ModalImageContainer,
  ModalTextContainer,
  ModalCloseButton,
  ModalButtonContainer,
  ModalSectionTitle,
} from "./styled";

import { projectsCopy } from "../Copy";

import Image from "next/image";

const ProjectCardModal = ({ toggleModal, isModalOpen }: any) => {
  return (
    <ModalContainer
      style={{
        transform: `translateX(${isModalOpen ? "100%" : "0%"})`,
        transition: "transform 1s ease",
      }}
    >
      <ModalCloseButton onClick={toggleModal}>close</ModalCloseButton>
      <ModalTextContainer>
        <ModalHeading>Cashmere</ModalHeading>

        <ModalSubheading>
          A virtual runway showcasing Kruger's 2023 "Dedicate for the Cure"
          dress collection.
        </ModalSubheading>

        <ModalSubheading>
          Header, side menu, hero section, and news page.
        </ModalSubheading>

        <ModalSubheading>
          Next.js, Typescript, A-frame, Styled components, Zustand
        </ModalSubheading>
      </ModalTextContainer>
    </ModalContainer>
  );
};

export default ProjectCardModal;
