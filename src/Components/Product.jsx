import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadingToggle } from "../Redux/actions";
import {useSelector, useDispatch} from "react-redux";


function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const history = useNavigate();
  const dispatch = useDispatch();
  const AuthState = useSelector(state => state.auth);
  const ProductState = useSelector(state => state.product);

  const getProducts = async () => {
    try {
      dispatch(loadingToggle());
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      dispatch(loadingToggle());
      const data = await response.json();
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
    if (!AuthState.isAuth) {
      history("/login")
    }
  }, []);

  if(ProductState.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
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
