import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewsCard from "./ReviewsCard";
import ImagesCard from "./ImagesCard";
import communityData from "../communityData.json";


const Section1 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32%;
  margin-right: 7%;
  @media screen and (max-width: 330px) {
    justify-content: center;
    margin-left: -17%;
    margin-right: -12%;
    margin-top: 38%;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    margin-top: 19%;
    margin-right: 18%;
  }
  @media screen and (min-width: 601px) and (max-width: 800px){
    margin-left: -65%;
    margin-top: 135%;
  }
  @media screen and (min-width: 801px) and (max-width: 1229px) {
    justify-content: flex-start;
    margin-top: 44%;
    margin-left: -6%;
  }
`;

const Section2 = styled.div`
  display: flex;
  margin-left: -49%;
  margin-top: -8%;

  @media screen and (max-width: 330px) {
    justify-content: center;
    margin-left: -9%;
    margin-top: 7%;
    margin-right: -4%;
  }

  @media screen and (min-width: 331px) and (max-width: 400px) {
    justify-content: center;
    margin-left: -12%;
    margin-top: 7%;
  }

  @media screen and (min-width: 401px) and (max-width: 600px) {
    justify-content: center;
    margin-top: 7%;
    margin-left: 2%;
  }
  @media screen and (min-width: 601px) and (max-width: 800px){
    margin-top: 7%;
    margin-left: -92%;
  }
  @media screen and (min-width: 801px) and (max-width: 1229px) {
    margin-left: -79%;
    margin-top: 11%;
  }
`;

const Section3 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 7%;
  @media screen and (max-width: 330px) {
    justify-content: center;
    margin-left: -10%;
    margin-top: 7%;
    margin-right: -5%;
  }
  @media screen and (min-width: 331px) and (max-width: 400px) {
    justify-content: center;
    margin-top: 7%;
    margin-left: -2%;
  }

  @media screen and (min-width: 401px) and (max-width: 600px) {
    justify-content: center;
    margin-top: 7%;
    margin-left: 11%;
  }

  @media screen and (min-width: 601px) and (max-width: 800px){
    margin-top: 7%;
    margin-left: -66%;
  }

  @media screen and (min-width: 801px) and (max-width: 1229px) {
    justify-content: flex-start;
    margin-left: -10%;
    margin-top: 5%;
  }

`;

const ReviewsAndImagesSection = () => {
  AOS.init();
  const reviewsAndImages = communityData.ReviewsAndImages.map((data) => {
    if (data.sectionId === 1) {
      return (
        <Section1
          className="row"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <ImagesCard sectionId={data.sectionId} />
          <ReviewsCard data={data} />
        </Section1>
      );
    } else if (data.sectionId === 2) {
      return (
        <Section2
          className="row"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <ReviewsCard data={data} />
          <ImagesCard sectionId={data.sectionId} />
        </Section2>
      );
    } else if (data.sectionId === 3) {
      return (
        <Section3
          className="row"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
        >
          <ReviewsCard data={data} />
          <ImagesCard sectionId={data.sectionId} />
        </Section3>
      );
    }
  });
  return <div style={{ width: "100%", zIndex: 10 }}>{reviewsAndImages}</div>;
};

export default ReviewsAndImagesSection;
