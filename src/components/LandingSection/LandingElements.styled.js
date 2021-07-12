import styled from "styled-components";

export const LandingContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 768px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 0.1),
      rgba(255, 0, 0, 0.1)
    );
  }

  @media screen and (max-width: 480px) {
    height: 470px;
  }
`;

export const LandingBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover; 
object-fit: cover; 
background #232a34;
`;

export const LandingContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading1 = styled.p`
  color: #fff;
  font-size: 65px;
  text-align: center;
  font-weight: bolder;
  letter-spacing: -2px;

  //   @media screen and (max-width: 768px) {
  //     font-size: 62px;
  //   }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Heading2 = styled.h1`
  color: #fff;
  font-size: 85px;
  text-align: center;
  font-weight: bolder;
  margin-top: -14px;
  letter-spacing: -2px;

  //   @media screen and (max-width: 768px) {
  //     font-size: 85px;
  //   }
  @media screen and (max-width: 480px) {
    font-size: 42px;
    margin-top: -8px;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  font-size: 27px;
  text-align: center;
  font-weight: bolder;
  letter-spacing: -1px;

  //   @media screen and (max-width: 768px) {
  //     font-size: 40px;
  //   }
  @media screen and (max-width: 480px) {
    font-size: 22px;
    margin-top: 3px;
  }
`;
