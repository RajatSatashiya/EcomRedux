import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const history = useNavigate();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      setLoading(false);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>{loading ? "Loading... " : ""}</h1>
      <div className="individual-product">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3>{product.title}</h3>
        <div>{product.description}</div>
        <div>
          <b>Category: </b>
          {product.category}
        </div>
        <div>
          <b>Price: </b>
          {product.price}
        </div>
        <div>
            <b>Rating:</b>
            {product.rating && product.rating.rate} by {product.rating && product.rating.count} users
        </div>
      </div>
    </>
  );
}

export default Product;
