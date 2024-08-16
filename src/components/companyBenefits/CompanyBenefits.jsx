import React from "react";
import Wrapper from "./Wrapper";

const companyInfos = [
  {
    id: 1,
    title: "free delivery",
    desc: "For orders over $100",
    img: "./assets/images/delivery.svg",
    aosDuration: 450
  },
  {
    id: 2,
    title: "Quality guarantee",
    desc: "7 days money back guarantee",
    img: "./assets/images/guarantee.svg",
    aosDuration: 700
  },
  {
    id: 3,
    title: "24/7 online support",
    desc: "We are with you always and everywhere",
    img: "./assets/images/headphone.svg",
    aosDuration: 950
  },
  {
    id: 4,
    title: "Secure payment",
    desc: "With all payment gateways",
    img: "./assets/images/wallet.svg",
    aosDuration: 1200
  },
];

export default function CompanyBenefits() {
  return (
    <Wrapper >
      {companyInfos.map((info) => (
        <div key={info.id} data-aos="flip-left" data-aos-duration={info.aosDuration}>
          <img id={`img${info.id}`} src={info.img} alt="company benefit" />
          <div>
            <span className="title">{info.title}</span>
            <span className="desc">{info.desc}</span>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
