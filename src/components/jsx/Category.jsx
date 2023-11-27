import React from "react";
import CategoryCard from "./CategoryCard";
import "../styles/Category.css";
import men from "../comp-images/men-category-image.jpg";
import women from "../comp-images/women-category-image.jpg";
import kids from "../comp-images/kids-category-image.jpg";
import unisex from "../comp-images/unisex-category-image.jpg"

const Category = () => {
  return (
    <div className="wrapper-category">
      <div className="category-holder">
        <CategoryCard
          image={men}
          category="men"
          title="Shop men"
          categoryDesc="Desc Men"
        />
        <CategoryCard
          image={women}
          category="women"
          title="Shop women"
          categoryDesc="Desc women"
        />
        <CategoryCard
          image={kids}
          category="kids"
          title="Shop Kids"
          categoryDesc="Desc Kids"
        />
        <CategoryCard
          image={unisex}
          category="men"
          title="Shop Unisex"
          categoryDesc="Desc Unisex"
        />
      </div>
    </div>
  );
};

export default Category;
