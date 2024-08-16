import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import { useGetAllArticlesQuery } from "../../Redux/service/api/articles";
import { selectArticleByUrl } from "../../Redux/service/api/articles";
import Path from "../../components/path/Path";
import { MdOutlineDateRange } from "react-icons/md";
import { TbClockHour10 } from "react-icons/tb";
import DOMPurify from "dompurify";

export default function SingleBlog() {
  const { blogUrl } = useParams();

  const { data: articles, isLoading } = useGetAllArticlesQuery();
  const article = useSelector((state) => selectArticleByUrl(blogUrl)(state));

  if (isLoading) return <div>Loading...</div>;
  if (!article) return <div>Article not found</div>;

  const paths = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Blogs", url: "/blogs" },
    { id: 3, name: article.title, url: `/blog/${article.url}` },
  ];


  return (
    <>
      <Path paths={paths} title={article.title} />
      <Wrapper>
        <img className="cover" src={`/${article.image}`} alt={article.title} />
        <div className="content">
          <div className="info">
            <div className="category">
              <span className="title">Category: </span>
              <span>{article.category}</span>
            </div>
            <div className="date">
              <MdOutlineDateRange />
              <span>{article.date}</span>
            </div>
            <div className="hour">
              <TbClockHour10 />
              <span>{article.hour}</span>
            </div>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content),
            }}
          ></div>
        </div>
      </Wrapper>
    </>
  );
}
