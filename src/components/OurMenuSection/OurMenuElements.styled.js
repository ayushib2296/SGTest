import styled from "styled-components";

export const OurMenuContainer = styled.div`
  background-color: #f8f8f8;
  height: 894px;
  :after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 800px) {
    height: 1170px;
  }
`;

export const Column1 = styled.div`
  width: 30%;
  float: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Column2 = styled.div`
  width: 20%;
  float: left;
  border-left: 1px solid #adb5bd;
  border-right: 1px solid #adb5bd;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Column3 = styled.div`
  width: 20%;
  float: left;
  border-right: 1px solid #adb5bd;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Column4 = styled.div`
  width: 30%;
  float: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Header1 = styled.h1`
  font-weight: 600;
  margin-top: 187px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`;
export const Header2 = styled.h1`
  font-weight: 600;
  margin-top: 319px;
  margin-left: -10%;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    text-align: center;
    margin-top: 120px;
    margin-left: 0%;
  }
`;
export const Header3 = styled.h1`
  font-weight: 600;
  margin-top: 279px;
  margin-left: -10%;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    text-align: center;
    margin-left: 0px;
    margin-top: 0px;
  }
`;
export const Header4 = styled.h1`
  font-weight: 600;
  margin-top: 224px;
  margin-left: -33%;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    text-align: center;
    margin-left: -20%;
    margin-top: 80px;
  }
`;

export const ItemContainer = styled.div`
  width: 195px;
  max-height: 150px;
  margin-top: ${(props) =>
    props.containerMarTop ? props.containerMarTop : "5%"};

 @media screen and (max-width: 800px){
     width: 150px;
 }

`;
export const Title = styled.div`
  font-size: 14px;
  color: #333333;
  text-align: left;
  letter-spacing: -1px;
  font-weight: bolder;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #767676;
  text-align: left;
  margin-top: 9px;
  
  @media screen and (max-width: 800px){
    font-size: 12px;
}
`;

export const Price = styled.div`
  width: 53px;
  height: 28px;
  border: 2px solid #ffdac9;
  padding: 4px;
  font-size: 13px;
  font-weight: bolder;
  color: #333333;
`;
