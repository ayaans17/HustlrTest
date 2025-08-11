import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  // Mock variants if not provided by API
  const variants = product.variants || ["Small", "Medium", "Large"];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const inStock = product.stock !== 0 && product.stock !== undefined;

  return (
    <div className="card text-center h-100 p-3 shadow-sm">
      <img
        src={product.image}
        className="card-img-top mx-auto"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold">${product.price}</p>

        {/* Variant Dropdown */}
        <select
          className="form-select my-2"
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
        >
          {variants.map((variant, idx) => (
            <option key={idx} value={variant}>
              {variant}
            </option>
          ))}
        </select>

        {/* Add to Cart / Out of Stock */}
        {inStock ? (
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={() => addToCart({ ...product, selectedVariant })}
          >
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-secondary mt-auto" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
