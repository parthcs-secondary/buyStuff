import React from "react";
import "../styles/CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div>
      <div
        className="category-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          height: "200px",
          width: "160px",
        }}
      ></div>
      <div className="category-title">{props.category}</div>
      <div className="category-desc">{props.categoryDesc}</div>
      <div className="category-explore">
        <Link to="/products">
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
