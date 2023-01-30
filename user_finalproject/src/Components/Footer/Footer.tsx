// library
import React, { useEffect } from "react";
import AOS from "aos";

//icon
import { FiSend, FiChevronRight } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

// assets
import "../../assets/css/footer.css";
const Footer = () => {
  //video
  const video = require("../../assets/video/video.mp4");
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>{" "}
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button
              data-aos="fade-up"
              className="btnOutline flex"
              type="submit"
            >
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard d-flex">
          <div className="footerIntro d-flex">
            <div className="logoDiv">
              <img src="https://links.papareact.com/qd3" alt="" />
            </div>
            <div className="footerParagraph" data-aos="fade-up">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              laudantium vitae alias optio porro iure, vel, odio eum voluptates
              aut non culpa nisi maxime. Necessitatibus ipsa veniam quisquam id
              nihil.
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HotelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Viet Nam
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Argentina
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Japan
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED - 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
