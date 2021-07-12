import React from "react";
import picture1 from "../../../../images/picture1.png";
import picture2 from "../../../../images/picture2.png";
import picture3 from "../../../../images/picture3.png";
import {
  CardContainer,
  ImageContainer,
  InstagramImage,
  InstagramIcon,
  IconContainer,
} from "./ImageElements.styled";
import instaIconSrc from "../../../../images/instagram-btn.png";

const ImagesCard = ({ sectionId }) => {
  let imgUrl = sectionId === 1 ? picture1 : sectionId === 2 ? picture2 : picture3;
  let marLeft = sectionId === 1 ? '0px' :'25px';
  return (
    <CardContainer style={{marginLeft: marLeft}}>
      <ImageContainer>
        <InstagramImage src={imgUrl} />
      </ImageContainer>
      <IconContainer>
        <InstagramIcon src={instaIconSrc} />
      </IconContainer>
    </CardContainer>
  );
};

export default ImagesCard;
