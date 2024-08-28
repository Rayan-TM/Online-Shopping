import React from "react";
import { createPortal } from "react-dom";
import ComparisonModal from "./ComparisonModal";
import { FaRegTrashAlt } from "react-icons/fa";
import Color from "../color/Color";
import { remove } from "../../Redux/comparisonSlice";
import AddToBasketButton from "../addToBasketButton/AddToBasketButton";

export default function ComparisonTable({
  setIsComparisonOpen,
  dispatch,
  comparisonProducts,
  userInfo,
}) {
  function removeFromComparison(id) {
    dispatch(remove({ id }));
    comparisonProducts.length === 1 && setIsComparisonOpen(false);
  }

  return createPortal(
    <ComparisonModal
      className="comparison-container"
      onClick={(e) =>
        e.target.classList.contains("comparison-container") &&
        setIsComparisonOpen(false)
      }
    >
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th></th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromComparison(product.id)}
                  >
                    Remove <FaRegTrashAlt />
                  </button>
                </td>
              ))}
            </tr>
            <tr>
              <th>Image</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>
                  <img src={product.image} alt={product.name} />
                </td>
              ))}
            </tr>
            <tr>
              <th>Name</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.name}</td>
              ))}
            </tr>
            <tr>
              <th>Price</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.price}$</td>
              ))}
            </tr>
            <tr>
              <th>Category</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.category}</td>
              ))}
            </tr>
            <tr>
              <th>Colors</th>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="colors">
                  {JSON.parse(product.colors).map((color) => (
                    <Color key={color.id} {...color} />
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <th></th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>
                  <AddToBasketButton
                    name={product.name}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    url={product.url}
                    userInfo={userInfo}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </ComparisonModal>,
    document.body
  );
}
