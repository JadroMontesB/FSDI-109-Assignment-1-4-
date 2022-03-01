import QuantityPicker from "./quantityPicker";
import "./product.css";
import { useState, useContext } from "react";
import storeContext from "../store/storeContext";

const Product = (props) => {

  const [quantity, setQuantity] = useState(1);
  const {addProductToCart, removeProductFromCart} = useContext(storeContext);
  
  const onQuantityChange = (value) => {

    setQuantity(value);

  };

  const getTotal = () => {

    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);

  };

  const pushToCart = () => {

    let prodToCart = {
      ...props.data,
      quantity: quantity
    }; 

    addProductToCart(prodToCart);
  };  

  return (
    <div className="product">

      <img src={"/images/" + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>

      <div className="price-info">

        <label className="total">{getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>

      </div>

      <QuantityPicker onChange={onQuantityChange} />

      <button onClick={pushToCart} className="btn-AddCart">Add To Cart</button>

    </div>
  );
};


export default Product;



