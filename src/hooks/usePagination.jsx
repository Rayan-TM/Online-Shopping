import { useState, useEffect } from "react";

export default function usePagination(allData, limit) {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstItemNumber, setFirstItemNumber] = useState(null);
  const [lastItemNumber, setLastItemNumber] = useState(null);
  const lastPage = Math.ceil(allData?.length / limit);

  function minusPageHandler() {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  }

  function plusPageHandler() {
    if (currentPage < lastPage) {
      setCurrentPage((prevState) => prevState + 1);
    }
  }

  useEffect(() => {
    setFirstItemNumber((currentPage - 1) * limit + 1);
    setLastItemNumber(
      currentPage === lastPage ? allData.length : currentPage * limit
    );
  }, [currentPage, allData]);

  return {
    plusPageHandler,
    minusPageHandler,
    currentPage,
    setCurrentPage,
    firstItemNumber,
    lastItemNumber,
    lastPage,
  };
}
