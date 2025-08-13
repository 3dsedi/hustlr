import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [variantStocks, setVariantStocks] = useState({});
  const dispatch = useDispatch();

  const addProduct = (productData) => {
    dispatch(addCart(productData));

    const variantKey = `${product.id}-${productData.selectedVariant}`;
    setVariantStocks((prev) => ({
      ...prev,
      [variantKey]: Math.max(0, (prev[variantKey] || 5) - 1),
    }));
  };

  const getVariantsByCategory = (category) => {
    const basePrice = parseFloat(product.price);

    const getVariantStock = (variantName) => {
      const variantKey = `${product.id}-${variantName}`;
      return variantStocks[variantKey] !== undefined
        ? variantStocks[variantKey]
        : 5;
    };

    switch (category) {
      case "men's clothing":
      case "women's clothing":
        return [
          {
            id: 0,
            name: "Small",
            price: basePrice.toFixed(2),
            available: getVariantStock("Small") > 0,
            stock: getVariantStock("Small"),
          },
          {
            id: 1,
            name: "Medium",
            price: basePrice.toFixed(2),
            available: getVariantStock("Medium") > 0,
            stock: getVariantStock("Medium"),
          },
          {
            id: 2,
            name: "Large",
            price: basePrice.toFixed(2),
            available: getVariantStock("Large") > 0,
            stock: getVariantStock("Large"),
          },
          {
            id: 3,
            name: "XL",
            price: (basePrice + 2).toFixed(2),
            available: getVariantStock("XL") > 0,
            stock: getVariantStock("XL"),
          },
        ];

      case "jewelery":
        return [
          {
            id: 0,
            name: "Gold",
            price: (basePrice * 1.2).toFixed(2),
            available: getVariantStock("Gold") > 0,
            stock: getVariantStock("Gold"),
          },
          {
            id: 1,
            name: "Silver",
            price: basePrice.toFixed(2),
            available: getVariantStock("Silver") > 0,
            stock: getVariantStock("Silver"),
          },
          {
            id: 2,
            name: "Platinum",
            price: (basePrice * 1.5).toFixed(2),
            available: getVariantStock("Platinum") > 0,
            stock: getVariantStock("Platinum"),
          },
        ];

      case "electronics":
        return [
          {
            id: 0,
            name: "Gray",
            price: basePrice.toFixed(2),
            available: getVariantStock("Gray") > 0,
            stock: getVariantStock("Gray"),
          },
          {
            id: 1,
            name: "White",
            price: (basePrice + 5).toFixed(2),
            available: getVariantStock("White") > 0,
            stock: getVariantStock("White"),
          },
          {
            id: 2,
            name: "Black",
            price: (basePrice + 10).toFixed(2),
            available: getVariantStock("Black") > 0,
            stock: getVariantStock("Black"),
          },
        ];

      default:
        return [
          {
            id: 0,
            name: "Standard",
            price: basePrice.toFixed(2),
            available: getVariantStock("Standard") > 0,
            stock: getVariantStock("Standard"),
          },
        ];
    }
  };

  const variants = getVariantsByCategory(product.category);

  const currentVariant = variants[selectedVariant];

  const handleVariantChange = (e) => {
    setSelectedVariant(parseInt(e.target.value));
  };

  const getVariantLabel = (category) => {
    switch (category) {
      case "men's clothing":
      case "women's clothing":
        return "Size:";
      case "jewelery":
        return "Material:";
      case "electronics":
        return "Color:";
      default:
        return "Options:";
    }
  };
  return (
    <div
      id={product.id}
      key={product.id}
      className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
    >
      <div className="card text-center h-100" key={product.id}>
        <img
          className="card-img-top p-3"
          src={product.image}
          alt="Card"
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
          <p className="card-text">{product.description.substring(0, 90)}...</p>

          <div className="mb-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-warning me-2">
                {[...Array(5)].map((_, index) => {
                  const rating = product.rating?.rate || 0;
                  if (index < Math.floor(rating)) {
                    return <i key={index} className="fas fa-star"></i>;
                  } else if (index < rating) {
                    return <i key={index} className="fas fa-star-half-alt"></i>;
                  } else {
                    return <i key={index} className="far fa-star"></i>;
                  }
                })}
              </div>
              <small className="text-muted">
                {product.rating?.rate?.toFixed(1) || "N/A"} (
                {product.rating?.count || 0} reviews)
              </small>
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="variant-select"
              className="form-label small text-muted"
            >
              {getVariantLabel(product.category)}
            </label>
            <select
              id="variant-select"
              className="form-select form-select-sm"
              value={selectedVariant}
              onChange={handleVariantChange}
            >
              {variants.map((variant) => (
                <option
                  key={variant.id}
                  value={variant.id}
                  disabled={!variant.available}
                >
                  {variant.name} - ${variant.price}
                  {variant.available
                    ? ` (${variant.stock} in stock)`
                    : " (Out of Stock)"}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">$ {currentVariant.price}</li>
        </ul>
        <div className="card-body">
          <Link to={"/product/" + product.id} className="btn btn-dark m-1">
            Buy Now
          </Link>
          {currentVariant.available ? (
            <button
              className="btn btn-dark m-1"
              onClick={() => {
                const remainingStock = currentVariant.stock - 1;
                toast.success(
                  `Added ${currentVariant.name} ${getVariantLabel(
                    product.category
                  )} (${remainingStock} left)`
                );
                addProduct({
                  ...product,
                  selectedVariant: currentVariant.name,
                  price: currentVariant.price,
                  stockCount: currentVariant.stock,
                });
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-secondary m-1" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
