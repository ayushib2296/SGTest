import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  OurMenuContainer,
  Column1,
  Column2,
  Column3,
  Column4,
  Header1,
  Header2,
  Header3,
  Header4,
} from "./OurMenuElements.styled";
import MenuItem from "./MenuItems";

const OurMenuSection = () => {
  AOS.init();
  return (
    <OurMenuContainer className="row" id="ourmenu">
      <Column1>
        <div
          data-aos="slide-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Header1>STARTERS</Header1>
          <div style={{ marginLeft: "7%" }}>
            <MenuItem
              title="QUINOA CROQUETTAS"
              description="Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)"
              price="£ 4.95"
              containerMarTop="20%"
            />
            <MenuItem
              title="CHIFA CHICHARRONES"
              description="Slow cooked crispy pork belly with sweet soy sauce"
              price="£ 6.95"
              containerMarTop="30%"
            />
            <MenuItem
              title="CALAMARES"
              description="Crispy baby squid with pickled jalapeno miso salsa"
              price="£ 6.95"
              containerMarTop="30%"
            />
          </div>
        </div>
      </Column1>
      <Column2>
        <div
          data-aos="slide-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Header2>MAIN COURSES</Header2>
          <MenuItem
            title="EL CLASICO"
            description="Sea bass ceviche with aji limo tiger's milk, sweet potato puree, choclo corn, red onion, coriander and plantain (gf)"
            price="£ 8.95"
            containerMarTop="10%"
          />
          <MenuItem
            title="TARADITO CALLAO"
            description="Cobia tiradito with coriander tiger's milk, black tobika, creme fraiche & sweet potato crunchies"
            price="£ 8.95"
            containerMarTop="50%"
          />
        </div>
      </Column2>
      <Column3>
        <div
          data-aos="slide-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Header3>SIDES</Header3>
          <MenuItem
            title="SUPER POLLO"
            description="Marinated corn feb chicken pieceswith rocotto salsa"
            price="£ 4.95"
            containerMarTop="10%"
          />
          <MenuItem
            title="PATATAS FRITAS"
            description="Sweet potato fries with aji rocotto mayonnaise (v)"
            price="£ 3.95"
            containerMarTop="50%"
          />
        </div>
      </Column3>
      <Column4>
        <div
          data-aos="slide-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Header4>DESSERTS</Header4>
          <div>
            <MenuItem
              title="ICE CREAM"
              description="Lorem ipsum dolor sit amet salerma petrum sea"
              price="£ 3.95"
              containerMarTop="10%"
            />
            <MenuItem
              title="TIRAMISU"
              description="Lorem ipsum dolor sit amet salerma petrum sea"
              price="£ 3.95"
              containerMarTop="15%"
            />
            <MenuItem
              title="CHOCOLATE BROWNIE"
              description="Lorem ipsum dolor sit amet salerma petrum sea"
              price="£ 3.95"
              containerMarTop="15%"
            />
          </div>
        </div>
      </Column4>
    </OurMenuContainer>
  );
};

export default OurMenuSection;
