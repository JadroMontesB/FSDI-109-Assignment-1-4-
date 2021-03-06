import { useEffect, useState } from "react";
import Product from "./product";
import DataService from "../services/dataService";
import Todo from "./todo";


import "./catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);


  const loadData = async () => {
    console.log("component loaded");

    let service = new DataService();
    let data = await service.getCatalog();
    setProducts(data);
  };


  useEffect(() => {
    loadData();
  }, []);



  return (
    <div className="catalog">
      <h3>Our amazing catalog</h3>
      <h5>There are {products.length} products</h5>
      {console.log("component rendered")}

      {products.map((p) => (
        <Product key={p._id} data={p} />
      ))}
      
      <Todo></Todo>
    </div>
  );
};

export default Catalog;
