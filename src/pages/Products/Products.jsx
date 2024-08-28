import React, { useEffect, useState } from "react";
import Path from "../../components/path/Path";
import {
  useGetAllProductsQuery,
  useGetProductsOfPageQuery,
} from "../../Redux/service/api/products";
import { useGetAllCategoriesQuery } from "../../Redux/service/api/category";
import Wrapper from "./Wrapper";
import Icon from "./Icon";
import RowWrapper from "../../shared/Rowrapper";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import SelectBox from "../../components/selectBox/SelectBox";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import Pagination from "../../components/pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import ContentSidebar from "../../components/contentSidebar/ContentSidebar";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
];

export default function Products() {
  const limit = 12;
  const selectBoxItems = [
    "Default sort",
    "Sort by cheapest",
    "Sort by most expensive",
    "Sort by latest",
  ];

  const [selectedStructure, setSelectedStructure] = useState("grid");
  const { data: allProducts = [] } = useGetAllProductsQuery();

  const { data: categories } = useGetAllCategoriesQuery(1);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentFilter, setCurrentFilter] = useState(selectBoxItems[0]);
  const [searchValue, setSearchValue] = useState("");

  const {
    lastPage,
    currentPage,
    setCurrentPage,
    firstItemNumber,
    lastItemNumber,
    minusPageHandler,
    plusPageHandler,
  } = usePagination(allProducts, limit);

  const {
    data: singlePageProducts,
    refetch,
    isLoading,
  } = useGetProductsOfPageQuery([
    currentPage,
    limit,
    currentCategory,
    currentFilter,
    searchValue,
  ]);

  function changeCategory(currentCategory) {
    setCurrentCategory(currentCategory);
    setCurrentPage(1);
  }

  useEffect(() => {
    refetch({
      currentPage,
      limit,
      currentCategory,
      currentFilter,
      searchValue,
    });
  }, [currentCategory]);

  return (
    <>
      <Path paths={paths} title="Products" />
      <Wrapper $selectedStructure={selectedStructure}>
        <ContentSidebar
          selectedStructure={selectedStructure}
          currentCategory={currentCategory}
          onChange={changeCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          categories={categories}
          type="Products"
        />

        <div className="main">
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            <>
              <RowWrapper className="top-section">
                <SelectBox
                  items={selectBoxItems}
                  currentItem={currentFilter}
                  setCurrentItem={setCurrentFilter}
                />
                <RowWrapper>
                  <span>
                    Showing {firstItemNumber}-{lastItemNumber} of{" "}
                    {allProducts?.length} results
                  </span>

                  <Icon
                    onClick={() => setSelectedStructure("list")}
                    className={selectedStructure === "list" ? "active" : null}
                  >
                    <FaList />
                  </Icon>
                  <Icon
                    onClick={() => setSelectedStructure("grid")}
                    className={selectedStructure === "grid" ? "active" : null}
                  >
                    <IoGrid />
                  </Icon>
                </RowWrapper>
              </RowWrapper>
              <div className="products">
                {singlePageProducts?.length ? (
                  singlePageProducts.map((product) => (
                    <div key={product.id}>
                      <SingleProduct
                        structure={selectedStructure}
                        className="single-product"
                        {...product}
                      />
                    </div>
                  ))
                ) : (
                  <div className="not-found-message">No Products Found</div>
                )}
              </div>
              <Pagination
                plusPage={plusPageHandler}
                minusPage={minusPageHandler}
                currentPage={currentPage}
                lastPage={lastPage}
                isNextDisabled={singlePageProducts?.length < limit}
              />
            </>
          )}
        </div>
      </Wrapper>
    </>
  );
}
