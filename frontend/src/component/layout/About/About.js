import React from "react";
import "./aboutSection.css";
import about_img from "../../../images/about_img.png";
import Title from "../Title/Title";
import MetaData from "../MetaData";

const About = () => {
  return (
    <div className="main">
      <MetaData title="About -- ELEGANZA" />
      <div className="mainHeading">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="paraBox">
        <img className="aboutImg" src={about_img} alt="" />
        <div className="paras">
          <p className="para">
            Eleganza was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="para">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="ourM">Our Mission</b>
          <p className="para">
            Our mission at Eleganza is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="subHeading">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="threeBox">
        <div className="boxes">
          <b>Quality Assurance:</b>
          <p className="boxesPara">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="boxes">
          <b>Convenience:</b>
          <p className="boxesPara">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="boxes">
          <b>Exceptional Customer Service:</b>
          <p className="boxesPara">
            Our team of dedicated professionals is her eto assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
