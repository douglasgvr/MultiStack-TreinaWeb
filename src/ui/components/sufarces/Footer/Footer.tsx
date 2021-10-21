import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./Footer.style";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        Douglas
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          dolore tenetur natus sed quia? Laudantium velit, repellat quos atque,
          cumque itaque similique, est error soluta exercitationem nesciunt.
          Iure, reprehenderit vitae?
        </Typography>
        <FooterTitle>Quem Somos</FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
