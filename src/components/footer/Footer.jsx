import React from "react";
import Wrapper from "./Wrapper";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import RowWrapper from "./../../shared/Rowrapper";
import ColumnWrapper from "./../../shared/ColWrapper.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <RowWrapper className="container">
        <ColumnWrapper
          data-aos="zoom-in"
          data-aos-duration="500"
          className="description"
        >
          <span>Online Shopping</span>
          <p>
            Online Shopping is a digital market that operates with the aim of
            providing expert staff based on the production of non-level content.
          </p>
          <RowWrapper as="ul">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="#">
                <FiFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <LuTwitter />
              </a>
            </li>
          </RowWrapper>
        </ColumnWrapper>
        <ColumnWrapper data-aos="zoom-in" data-aos-duration="700">
          <span className="title">quick access</span>
          <ul>
            <li>
              <Link className="underlined" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="underlined" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="underlined" to="/products">
                Store
              </Link>
            </li>
            <li>
              <Link className="underlined" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </ColumnWrapper>
        <ColumnWrapper data-aos="zoom-in" data-aos-duration="1000">
          <span className="title">Contact us</span>
          <div>
            <span>+44 1632 960134</span>
            <p>5 Clark Cliff, Kylechester, New Mia</p>
          </div>
        </ColumnWrapper>
        <ColumnWrapper
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="subscribe"
        >
          <span>To get the latest updates</span>
          <span className="title">Subscribe to our newsletter</span>
          <RowWrapper as="form">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </RowWrapper>
        </ColumnWrapper>
      </RowWrapper>
    </Wrapper>
  );
}
