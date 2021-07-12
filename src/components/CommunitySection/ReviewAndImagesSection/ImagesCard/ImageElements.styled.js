import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  padding: 15px;
  box-shadow: 0px 15px 50px #0000000f;
  display: flex;
  position: relative;
  @media screen and (max-width: 750px) {
    width: 130px;
    height: 130px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  overflow: hidden;
  @media screen and (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
`;

export const InstagramImage = styled.img`
  z-index: 3;
  width: 220px;
  height: 220px;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  overflow: hidden;
  right: 0;
  top: 0;
  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`;
export const InstagramIcon = styled.img`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`;
