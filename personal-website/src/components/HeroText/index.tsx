import { HeroText1, HeroParagraph, InteractiveSpan } from "./styled";
import { useState } from "react";

const HeroText = () => {
  return (
    <HeroParagraph id="hero">
      <HeroText1>Playtime.</HeroText1>
      {/* devoted to crafting immersive experiences that{" "}
      <InteractiveSpan>wow</InteractiveSpan> */}
    </HeroParagraph>
  );
};

export default HeroText;
