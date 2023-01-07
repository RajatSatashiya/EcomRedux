import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { loadingToggle } from "../Redux/actions";

function Home() {
  const [products, setProducts] = useState([]);
  const history = useNavigate();
  const dispatch = useDispatch();
  const AuthState = useSelector(state => state.auth);
  const ProductState = useSelector(state => state.product);


  const getProducts = async () => {
    try {
      dispatch(loadingToggle());
      const response = await fetch("https://fakestoreapi.com/products");
      dispatch(loadingToggle());
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const displayItems = products.map((item, index) => (
    <div key={index} className="product">
      <img src={item.image} alt={item.title} className="product-image" />
      <h3>{item.title}</h3>
      <Link to={`/products/${item.id}`}>More Info</Link>
    </div>
  ));

  useEffect(() => {
    getProducts();
    if (AuthState.isAuth) {
      history("/");
    } else {
      history("/login");
    }
  }, []);

  if(ProductState.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="products">{displayItems}</div>;
    </>
  );
}

export default Home;
