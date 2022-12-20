import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts?.map((product, index) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
