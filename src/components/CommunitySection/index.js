import React from "react";
import {
  CommunityContainer,
  HeadingContainer,
  SalmonLine,
  Heading1,
  Heading2,
  ButtonContainer,
  KnowMoreBtn,
  DescriptionContainer,
  HeadingDescription,
} from "./CommunityElements.styled";
import ReviewsAndImagesSection from "./ReviewAndImagesSection";

const CommunitySection = () => {
  
  return (
    <CommunityContainer id="community">
   <HeadingContainer className="row">
        <div style={{ overflow: "auto", zIndex: "200", width: "100%" }}>
          <Heading1>MEET OUR</Heading1>
          <Heading2>COMMUNITY</Heading2>
        </div>
        <SalmonLine />
      </HeadingContainer>
      <ButtonContainer className="row">
        <KnowMoreBtn>KNOW MORE</KnowMoreBtn>
      </ButtonContainer>
      <DescriptionContainer className="row">
        <HeadingDescription>
          LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABERO EN TORNA
          ENTALTO
        </HeadingDescription>
      </DescriptionContainer>
    <ReviewsAndImagesSection />
    </CommunityContainer>
  );
};

export default CommunitySection;
