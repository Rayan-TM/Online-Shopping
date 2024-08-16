import React from "react";
import CategoryBox from "./CategoryBox";
import Wrapper from "./Wrapper";

const boxesInfo1 = [
  {
    id: 1,
    img: "./assets/images/handsfree.png",
    color: "#212121",
    content: ["Enjoy the", "headphones", "a lot"],
    aosDuration: 500,
  },

  {
    id: 2,
    img: "./assets/images/apple-watch.png",
    color: "#FEC62E",
    content: ["The latest", "smart", "watches"],
    aosDuration: 1000,
  },
  {
    id: 3,
    img: "./assets/images/Laptop-2-min.png",
    color: "#F42C37",
    content: ["Popular", "MacBook", "devices"],
    flex: 2,
    aosDuration: 1500,
  },
];

const boxesInfo2 = [
  {
    id: 4,
    img: "./assets/images/ps4.png",
    color: "#ECEBEC",
    content: ["The best", "special gaming", "consoles"],
    aosDuration: 1500,
  },
  {
    id: 5,
    img: "./assets/images/vr.png",
    color: "#2DD06F",
    content: ["Unique", "VR", "games"],
    aosDuration: 1000,
  },

  {
    id: 6,
    img: "./assets/images/speaker.png",
    color: "#1479FF",
    content: ["Amazon's", "most beautiful", "speakers"],
    aosDuration: 500,
  },
];

export default function CategoryBoxes() {
  return (
    <Wrapper>
      <div>
        {boxesInfo1.map((info) => (
          <CategoryBox key={info.id} {...info} />
        ))}
      </div>
      <div>
        {boxesInfo2.map((info) => (
          <CategoryBox key={info.id} {...info} />
        ))}
      </div>
    </Wrapper>
  );
}
