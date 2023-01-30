import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-bootstrap/Dropdown";
//icon
import { BsGlobe } from "react-icons/bs";
import { FaUserCircle, FaBars } from "react-icons/fa";

//css
import "../../assets/css/header.css";
import BottomNavbar from "./BottomNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import HeaderComponent from "./HeaderComponent";
import { Link } from "react-router-dom";

type Props = {}

const Header = (props: Props) => {

  return (
      <div className="headerSection">
          <Link to={''} className="headerLogo">
              <img
                  className="imageHeader"
                  src="https://links.papareact.com/qd3"
                  alt=""
              />
          </Link>
          <div className="searchBar">
              <HeaderComponent />

          </div>
          <div className="navBar">
              <div className="flex justify-content-center">
                  <p style={{color: '#909090'}} className="navBar-text mb-0">Enjoy</p>
                  <BsGlobe  style={{fontSize: '20px', color: '#909090'}} className="icon mx-2" />
                  <Dropdown align="end">
                      <Dropdown.Toggle className="flex user bg-transparent ">
                          <FaBars className="icon" />
                          <FaUserCircle className="icon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="mt-2 dropDownMenu">
                          <Dropdown.Item className="dropDownItem" href="#/action-1">
                              Sign up
                          </Dropdown.Item>
                          <Dropdown.Item className="dropDownItem" href="#/action-2">
                              Log in
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item className="dropDownItem" href="#/action-3">
                              Airbnb your home
                          </Dropdown.Item>
                          <Dropdown.Item className="dropDownItem" href="#/action-4">
                              Host an experience
                          </Dropdown.Item>
                          <Dropdown.Item className="dropDownItem" href="#/action-4">
                              Help
                          </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </div>
          </div>
           <MobileNavbar />

          <BottomNavbar /> 

      </div>

  );
};

export default Header

