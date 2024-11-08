import React, { useEffect, useState } from "react";
import Path from "../../components/path/Path";
import Wrapper from "./Wrapper";
import {
  useGetAllArticlesQuery,
  useGetBlogsOfPageQuery,
} from "../../Redux/service/api/articles";
import { useGetAllCategoriesQuery } from "../../Redux/service/api/category";
import SingleBlog from "../../components/singleBlog/SingleBlog";
import Pagination from "../../components/pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import RowWrapper from "../../shared/Rowrapper";
import ContentSidebar from "../../components/contentSidebar/ContentSidebar";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Blogs", url: "/blogs" },
];

export default function Blogs() {
  const limit = 9;
  const { data: allArticles = [] } = useGetAllArticlesQuery();

  const { data: categories } = useGetAllCategoriesQuery(0);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const {
    lastPage,
    currentPage,
    setCurrentPage,
    firstItemNumber,
    lastItemNumber,
    minusPageHandler,
    plusPageHandler,
  } = usePagination(allArticles, limit);

  const { data: singlePageArticles, refetch } = useGetBlogsOfPageQuery([
    currentPage,
    limit,
    currentCategory,
    searchValue,
  ]);

  function changeCategory(currentCategory) {
    setCurrentCategory(currentCategory);
    setCurrentPage(1);
  }

  useEffect(() => {
    refetch({ currentPage, limit, currentCategory, searchValue });
  }, [currentCategory]);

  useEffect(() => {
    setCurrentPage(1);
    refetch({ currentPage: 1, limit, currentCategory, searchValue });
  }, [searchValue]);

  return (
    <>
      <Path paths={paths} title="Blogs" />
      <Wrapper>
        <ContentSidebar
          currentCategory={currentCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChange={changeCategory}
          categories={categories}
          type="Blogs"
        />
        <div className="main">
          <RowWrapper className="blogs-info">
            <span>
              Showing {firstItemNumber}-{lastItemNumber} of{" "}
              {allArticles?.length} results
            </span>
          </RowWrapper>
          <div className="blogs">
            {singlePageArticles?.length ? (
              singlePageArticles.map((article) => (
                <SingleBlog key={article.id} {...article} />
              ))
            ) : (
              <div className="not-found-message">No Articles Found</div>
            )}
          </div>
          <Pagination
            plusPage={plusPageHandler}
            minusPage={minusPageHandler}
            currentPage={currentPage}
            lastPage={lastPage}
            isNextDisabled={singlePageArticles?.length < limit}
          />
        </div>
      </Wrapper>
    </>
  );
}
