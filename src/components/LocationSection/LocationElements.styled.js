import styled from "styled-components";

export const LocationContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;
  width: 100%;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    height: 230px;
  }
`;

export const MapBackground = styled.div`
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

export const LocationContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  //   padding: 8px 24px;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;

export const WhiteDiv = styled.div`
  position: absolute;
  background-color: #ffffff;
  height: 105px;
  width: 220px;
  margin-left: -555px;
  margin-top: -163px;

  @media screen and (max-width: 480px) {
    position: absolute;
    height: 50px;
    width: 104px;
    margin-left: 0px;
    margin-top: -85px;
  }

  @media screen and(max-width:400px) {
    position: absolute;
    height: 50px;
    width: 104px;
    margin-left: -171px;
    margin-top: -94px;
  }
  @media screen and (min-width: 481px) and (max-width: 800px) {
    margin-left: 0px;
  }
`;

export const LocationIcon = styled.img`
  position: absolute;
  margin-top: -112px;
  width: 42px;
  height: 70px;
  margin-left: -128px;
  @media screen and (max-width: 480px) {
    position: absolute;
    margin-top: -44px;
    width: 14px;
    height: 23px;
    margin-left: -55px;
  }
`;

export const LocationHeader = styled.h3`
  position: absolute;
  font-size: 42px;
  font-weight: bold;
  margin-top: -30px;
  margin-left: 18px;
  letter-spacing: -1px;
  color: #333333;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: initial;
    align-items: center;
    margin-bottom: -45px;
    margin-top: 7px;
  }
  @media screen and (min-width: 481px) and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: initial;
    align-items: center;
    font-size: 25px;
    margin-bottom: -45px;
    margin-top: 7px;
  }
`;

export const Address = styled.p`
  position: absolute;
  font-weight: bolder;
  width: 50%;
  margin-left: 17px;
  font-size: 17px;
  margin-top: 19%;
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;
