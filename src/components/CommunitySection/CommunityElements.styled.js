import styled from "styled-components";

export const CommunityContainer = styled.div`
  background: #f5f7f7;
  display: flex;
  padding: 0 30px;
  height: 1080px;
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
  }

  @media screen and (max-width: 600px) {
    display: block;
    height: 640px;
  }

  @media screen and (min-width: 601px) and (max-width: 800px){
    height: 1400px;
  }

  @media screen and (min-width: 801px) and (max-width: 1024px){
    height: 1200px;
  }
`;

export const HeadingContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: relative;
  top: 80px;
  right: 0;
  left: 25%;
  overflow: hidden;
  width: fit-content;
  height: fit-content;

  @media screen and (max-width: 750px) {
    top: 22px;
    left: 1%;
  }

  @media only screen and (min-width: 751px) and (max-width: 1024px) {
    left: 7%;
  }
`;

export const SalmonLine = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffdac9;
  -o-object-fit: cover;
  object-fit: cover;
  margin-left: -62px;
  margin-right: 80px;
  margin-top: -125px;
  height: 5px;
  width: 417px;

  @media screen and (max-width: 750px) {
    margin-top: -71px;
    height: 3px;
    width: 180px;
  }
`;

export const Heading1 = styled.p`
  font-size: 62px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-weight: 700;
  letter-spacing: -2px;
  width: fit-content;
  @media screen and (max-width: 750px) {
    font-size: 25px;
  }
`;

export const Heading2 = styled.p`
  font-size: 62px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: -50px;
  width: fit-content;

  @media screen and (max-width: 750px) {
    font-size: 25px;
    margin-top: -30px;
  }
`;

export const ButtonContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  top: 21%;
  right: 0;
  left: 27%;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  @media screen and (max-width: 750px) {
    top: 12%;
    left: 12%;
  }
  @media screen and (min-width: 751px) and (max-width: 800px) {
    left: 10%;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    left: 9%;
  } 
`;

export const KnowMoreBtn = styled.button`
  height: 30px;
  width: 91px;
  background: #ffdac9;
  border-radius: 0px;
  font-size: 11px;
  padding: 8px;
  font-weight: 600;
  color: #333333;
  @media screen and (max-width: 750px) {
    height: 22px;
    width: 81px;
    font-size: 10px;
    padding: 4px;
  }
`;

export const DescriptionContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  top: 27%;
  right: 0;
  left: 26%;
  overflow: hidden;
  width: 300px;
  height: 116px;
  @media screen and (max-width: 750px) {
    top: 15%;
    left: 9%;
    width: 202px;
    height: 75px;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    top: 25%;
    left: 8%;
  }
 
`;

export const HeadingDescription = styled.div`
  color: #333333;
  font-size: 19px;
  line-height: normal;
  word-break: break-word;
  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
`;
