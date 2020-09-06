import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: 1rem auto;
  @media screen and (min-width: 2000px) {
    width: 30%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  color: #66bfbf;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const SocialList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Icon = styled.a`
  font-size: 1.3rem;
  margin: 0 1rem;
  text-decoration: none;
  color: #66bfbf;

  &:hover {
    transition: 100ms ease-in;
    color: #056674;
  }
`;
