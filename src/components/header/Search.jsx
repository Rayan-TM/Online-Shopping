import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import RowWrapper from "../../shared/Rowrapper";
import { useGetSearchedProductsQuery } from "../../Redux/service/api/products";
import { useGetSearchedBlogsQuery } from "../../Redux/service/api/articles";
import { useNavigate } from "react-router-dom";

export default function Search({ onClose }) {
  const [searchValue, setSearchValue] = useState("");
  const { data: products } = useGetSearchedProductsQuery(searchValue);
  const { data: articles } = useGetSearchedBlogsQuery(searchValue);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <FaXmark onClick={() => onClose(false)} className="close-btn" />

      <RowWrapper className="input-container">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search product or blog..."
        />
        <BsSearch />
      </RowWrapper>
      <div className="searched-container">
        {products && products.length > 0 && (
          <div className="all-products">
            <h3>Products</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <span
                    onClick={() => {
                      onClose(false);
                      navigate(`/product/${product.url}`);
                    }}
                  >
                    {product.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {articles && articles?.length > 0 && (
          <div className="all-articles">
            <h3>Articles</h3>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>
                  <img src={article.image} alt={article.title} />
                  <span
                    onClick={() => {
                      onClose(false);
                      navigate(`/blog/${article.url}`);
                    }}
                  >
                    {article.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    background-color: ${theme.esther};
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;

    .searched-container {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-top: 2rem;
      min-height: 100vh;
      overflow-y: auto;

      @media (max-width: 900px) {
        flex-wrap: wrap;

        & > div {
          flex-basis: 100%;

          h3{
            text-align: center;
            font-size: 1.5rem;
            margin-top: 2rem;
          }
        }
      }

      & > div {
        width: 45%;

        h3 {
          margin-bottom: 1rem;
        }

        img {
          width: 25%;
        }

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        li span {
          display: block;
          margin-bottom: 0.5rem;
          cursor: pointer;

          &:hover {
            color: ${theme.primary};
          }
        }
      }
    }

    .input-container {
      padding-bottom: 1rem;
      border-bottom: 1px solid ${theme.title};
      font-size: 2.2rem;
      width: 80%;
      margin-top: 30%;

      input {
        background-color: transparent;
        border: none;
        outline: none;
        color: ${theme.title};
        font-size: 2.2rem;
        width: 100%;
      }
    }

    .close-btn {
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.1s linear;

      &:hover {
        color: ${theme.primary};
      }
    }
  `}
`;
