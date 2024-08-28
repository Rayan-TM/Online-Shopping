import React from "react";
import { add } from "../../Redux/comparisonSlice";
import { TfiReload } from "react-icons/tfi";

export default function ComparisonButton({
  setIsComparisonOpen,
  newProduct,
  dispatch,
  comparisonProducts,
}) {
  function addProductToComparisons() {
    const isProductInComparison = comparisonProducts.some(
      (product) => product?.id === newProduct.id
    );
    if (!isProductInComparison) {
      dispatch(add(newProduct));
    }
    setIsComparisonOpen(true);
  }
  return (
    <button onClick={addProductToComparisons} title="compare">
      <TfiReload />
    </button>
  );
}
