import React from "react";
import RowWrapper from "../../shared/Rowrapper";
import styled from "styled-components";
import { container } from "../../shared/utils";

const companies = [
  { id: 1, img: "./assets/images/group1.png", aosDuration: 250 },
  { id: 2, img: "./assets/images/group2.png", aosDuration: 500 },
  { id: 3, img: "./assets/images/group3.png", aosDuration: 700 },
  { id: 4, img: "./assets/images/group4.png", aosDuration: 1000 },
  { id: 5, img: "./assets/images/group5.png", aosDuration: 1500 },
];

export default function TopFooter() {
  return (
    <TopFooterWrapper>
      <RowWrapper className="companies">
        {companies.map((company) => (
          <img
            key={company.id}
            src={`/${company.img}`}
            alt="company logo"
            data-aos="fade-left"
            data-aos-duration={company.aosDuration}
          />
        ))}
      </RowWrapper>
    </TopFooterWrapper>
  );
}

const TopFooterWrapper = styled(RowWrapper)`
  ${container}
  background-color: ${({ theme }) => theme.secondary};
  height: 35vh;
  margin-top: 5rem;
  overflow: hidden;

  .companies {
    width: 100%;
  }

  img {
    transition: all 0.2s linear;
    opacity: 0.6 !important;
  }

  img:hover {
    opacity: 1 !important;
  }
`;
