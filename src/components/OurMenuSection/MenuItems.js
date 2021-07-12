import React from "react";
import {
  ItemContainer,
  Title,
  Description,
  Price,
} from "./OurMenuElements.styled";

const MenuItem = ({ title, description, price, containerMarTop }) => {
  return (
    <ItemContainer containerMarTop={containerMarTop}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </ItemContainer>
  );
};

export default MenuItem;
