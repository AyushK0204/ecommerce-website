import React from "react";
import Title from "../Title/Title";
import "./Contact.css";
import contact_img from "../../../images/contact_img.png";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div>
      <MetaData title="Contact -- ELEGANZA" />
      <div className="contactContainer">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="one">
        <img className="two" src={contact_img} alt="" />
        <div className="three">
          <p className="four">Our Store</p>
          <p className="five">
            Platform 9¾ King's Cross Station
            <br /> Euston Road, London, United Kingdom
          </p>
          <p className="five">
            Tel: 03457114141 <br />
            Email: admin@eleganza.com
          </p>
          <p className="four">Careers at Eleganza</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="six">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
