import React from "react";
import Hero from "../../components/hero/Hero";
import CategoryBoxes from "../../components/categoryBoxes/CategoryBoxes";
import CompanyBenefits from "../../components/companyBenefits/CompanyBenefits";
import Offer from "../../components/offer/Offer";
import LastProducts from "../../components/lastProducts/LastProducts";
import LastBlogs from "../../components/lastBlogs/LastBlogs";

const offers = [
  {
    offCount: "20% special discount",
    expire: "Until February 2024",
    leftTitle: "Beyond music",
    subTitle: "The best headphones of 2023",
    rightTitle: "Summer discount",
    img: "./assets/images/headphone2.png",
    color: "#F42C37",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, tenetur. Praesentium explicabo ab corporis iusto deserunt",
  },
  {
    offCount: "25% special discount",
    expire: "Until November 2024",
    leftTitle: "Smart watches",
    subTitle: "The smartest watch of 2023",
    rightTitle: "Winter discount",
    img: "./assets/images/watch.png",
    color: "#2DCC6E",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, tenetur. Praesentium explicabo ab corporis iusto deserunt",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryBoxes />
      <CompanyBenefits />
      <Offer {...offers[0]} />
      <LastProducts />
      <Offer {...offers[1]} />
      <LastBlogs />
    </>
  );
}
