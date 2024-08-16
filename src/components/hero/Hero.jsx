import React from "react";
import Wrapper from "./wrapper";
import CTAButton from "../../shared/CTAButton";

export default function Hero() {
  return (
    <Wrapper as="section" data-aos="zoom-out" data-aos-duration="1000">
      <span className="title1">Beats headphones</span>
      <span className="title2">Wireless</span>
      <h1>Special headphones</h1>
      <div>
        <CTAButton to="/products">Shopping by category</CTAButton>
        <div className="description">
          <span>Description</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
            quis? Repellendus aliquam saepe vel doloremque officia.
            Perspiciatis, reiciendis quia?
          </p>
        </div>
      </div>
      <img src="./assets/images/hero.png" alt="" />
    </Wrapper>
  );
}
