import React, { Fragment } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

import "../../../styles/components/footer.css"

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="footerMain">
            <div className="footerDetails">
              <h4>Brand Logo</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ducimus itaque
                consectetur porro, voluptas nostrum id praesentium perferendis nihil magni
                accusantium dolores, est quo corporis non veritatis maiores beatae modi.
              </p>
              <ul className='socialIcon'>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedinIn /></li>
                <li><FaTwitter /></li>
                <li><FaYoutube /></li>
              </ul>
            </div>
            <div className="menuList">
              <h3>Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Categories</li>
                <li>Popular Courses</li>
                <li>FAQs</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="menuList">
              <h3>Contact Info</h3>
              <ul className='addressIcon'>
                <li>
                  <span>
                    <GrLocation />
                  </span>
                  <span>
                    XYZ 258, XYZ COMPLEX CITY, DELHI-92, INDIA
                  </span>
                </li>
                <li>
                  <span>
                    <FaRegEnvelope />
                  </span>
                  <span>
                    xyz@example.com
                  </span>
                </li>
                <li>
                  <span>
                    <IoCall />
                  </span>
                  <span>
                    +91 85585-55855
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBottom">
            <p>
              © 2025 CodeWithPintar | All Rights Reserved.
            </p>
            <ul>
              <li>Privacy Policy </li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer