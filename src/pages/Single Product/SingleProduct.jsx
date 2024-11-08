import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import {
  useGetAllProductsQuery,
  selectProductByUrl,
} from "../../Redux/service/api/products";
import { useGetAllContentCommentsQuery } from "../../Redux/service/api/comments";
import { useGetUserInfoByTokenQuery } from "../../Redux/service/api/users";

import Tabs from "./Tabs";
import Comment from "../../components/comment/Comment";
import Comments from "../../shared/Comments";
import CommentForm from "../../components/commentForm/CommentForm";
import SingleProductInfo from "../../components/SingleProductInfo/SingleProductInfo";

export default function SingleProduct() {
  const { productUrl } = useParams();
  const [tabs, setTabs] = useState(["Description", "Comments"]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const userToken = localStorage.getItem("Token");
  const { data: products, isLoading } = useGetAllProductsQuery();
  const product = useSelector((state) => selectProductByUrl(productUrl)(state));

  const { data: comments, refetch } = useGetAllContentCommentsQuery(
    [1, product?.id],
    {
      skip: !product,
    }
  );

  const { data: userInfo } = useGetUserInfoByTokenQuery(userToken, {
    skip: !userToken,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  function changeTab() {
    currentTab === "Description"
      ? setCurrentTab("Comments")
      : setCurrentTab("Description");
  }

  const commentFormInfo = {
    category: product.category,
    contentID: product.id,
    userID: userInfo?.[0].id,
    isProduct: 1,
    userToken,
    refetch,
  };

  const productInfo = { product, userInfo };

  return (
    <div style={{ padding: "1rem" }}>
      <SingleProductInfo {...productInfo} />
      <Tabs>
        <div className="tabs-btns">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={changeTab}
              className={tab === currentTab ? "active" : null}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="content">
          {currentTab === "Description" ? (
            <>
              <h2>Description</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description),
                }}
              ></div>
            </>
          ) : (
            <Comments>
              <div className="comments">
                {comments.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))}
              </div>

              <CommentForm {...commentFormInfo} />
            </Comments>
          )}
        </div>
      </Tabs>
    </div>
  );
}
