import { HeroText1, HeroParagraph, InteractiveSpan } from "./styled";

const HeroText = () => {
  return (
    <HeroParagraph>
      <HeroText1>Frontend developer </HeroText1>
      devoted to crafting immersive experiences that{" "}
      <InteractiveSpan>wow</InteractiveSpan>.
    </HeroParagraph>
  );
};

export default HeroText;
