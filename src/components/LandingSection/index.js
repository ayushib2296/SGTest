import React from "react";
import {
  LandingContainer,
  LandingBackground,
  ImageBackground,
  LandingContent,
  Heading1,
  Heading2,
  Subtitle,
} from "./LandingElements.styled";
import landingImg from "../../images/landingImage.png";

const LandingSection = () => {
  return (
    <LandingContainer id="home">
      <LandingBackground>
        <ImageBackground src={landingImg}></ImageBackground>
      </LandingBackground>
      <LandingContent>
        <Heading1>THE BEST FOODIE</Heading1>
        <Heading2>EXPERIENCE</Heading2>
        <Subtitle>NOW IN LONDON</Subtitle>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
