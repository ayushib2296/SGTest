import React from "react";
import {
  LocationContainer,
  MapBackground,
  ImageBackground,
  LocationContent,
  WhiteDiv,
  LocationHeader,
  Address,
  LocationIcon,
//   Heading1,
//   Heading2,
//   Subtitle,
} from "./LocationElements.styled";
import map from "../../images/map.png";
import locationIcon from '../../images/location-icon.png'

const LocationSection = () => {
  return (
    <LocationContainer id="location">
      <MapBackground>
        <ImageBackground src={map}></ImageBackground>
      </MapBackground>
      <LocationContent>
        <WhiteDiv>
            <LocationHeader>
                LOCATION
            </LocationHeader>
            <Address>
                12 Upper St. Martin's Lane
            </Address>
        </WhiteDiv>
        <LocationIcon src={locationIcon}/>
      </LocationContent>
    </LocationContainer>
  );
};

export default LocationSection;
