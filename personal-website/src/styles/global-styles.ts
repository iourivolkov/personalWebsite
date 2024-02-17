import { createGlobalStyle } from "styled-components";

export default createGlobalStyle<{ isModal?: boolean }>`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

  #nav, #hero, #heroFooterContainer, #aboutPageContainer, #projectPageContainer, #projects, #projectCardContainer, #footerContainer {
    filter: ${(props) => props.isModal && "blur(12px)"};
  }

  
`;
