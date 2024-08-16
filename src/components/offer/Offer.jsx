import React from "react";
import Wrapper from "./Wrapper";
import CTAButton from "../../shared/CTAButton";
import ColumnWrapper from "../../shared/ColWrapper";
import RowWrapper from "../../shared/Rowrapper";

export default function Offer({
  offCount,
  expire,
  leftTitle,
  subTitle,
  rightTitle,
  desc,
  img,
  color,
}) {
  return (
    <Wrapper $color={color}>
      <RowWrapper
        className="content"
        as="section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={img} alt="" className={`img-${rightTitle}`} />
        <div className="left">
          <span className="off-count">{offCount}</span>
          <h3>{leftTitle}</h3>
          <span className="expire">{expire}</span>
        </div>
        <ColumnWrapper className="right">
          <span className="sup-title">{subTitle}</span>
          <span className="title">{rightTitle}</span>
          <p className="desc">{desc}</p>
          <CTAButton
            className="link"
            to="/products"
            $background="#fff"
            $color="#212121"
          >
            Start shopping
          </CTAButton>
        </ColumnWrapper>
      </RowWrapper>
    </Wrapper>
  );
}
