import React from "react";
import {
  HeaderContainer,
  Logo,
  SocialList,
  Icon,
  LogoContainer,
} from "./styles/Header";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>GridPic</Logo>
      </LogoContainer>
      <SocialList>
        <Icon href="#">Facebook</Icon>
        <Icon href="#">Twitter</Icon>
        <Icon href="#">Pinterest</Icon>
      </SocialList>
    </HeaderContainer>
  );
}

export default Header;
