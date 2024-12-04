import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/eleganza2.png";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      searchIcon={true}
      SearchIconElement={FaSearch}
      cartIcon={true}
      CartIconElement={FaShoppingCart}
      burgerColorHover="#a6a5a4"
      burgerColor="#e6b04e"
      logo={logo}
      logoWidth="22vmax"
      navColor1="black"
      logoHoverSize="22px"
      logoHoverColor="#ffffff"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.5vmax"
      link1Color="rgba(230, 176, 78,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#ffffff"
      link1Margin="1.5vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(230, 176, 78,0.8)"
      profileIconSize="3.0vmax"
      cartIconSize="3.0vmax"
      searchIconSize="3.0vmax"
      searchIconColor="rgba(230, 176, 78,0.8)"
      cartIconColor="rgba(230, 176, 78,0.8)"
      profileIconColorHover="#ffffff"
      searchIconColorHover="#ffffff"
      cartIconColorHover="#ffffff"
      cartIconMargin="1.5vmax"
    />
  );
};

export default Header;
