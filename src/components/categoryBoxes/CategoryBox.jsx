import React from "react";
import CTAButton from "../../shared/CTAButton";
import BoxWrapper from "./BoxWrapper";

export default function CategoryBox({ id, content, color, img, aosDuration }) {
  return (
    <BoxWrapper
      $color={color}
      data-aos="fade-right"
      data-aos-duration={aosDuration}
      className={`category${id} category`}
    >
      <div id={`box${id}`}>
        <span className="title1">{content[0]}</span>
        <span className="title2">{content[1]}</span>
        <span className="title3">{content[2]}</span>
        <CTAButton to="/products" $color={color}>
          Show
        </CTAButton>
        <img src={img} alt="product" />
      </div>
    </BoxWrapper>
  );
}
