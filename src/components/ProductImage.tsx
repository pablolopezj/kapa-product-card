import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, style }: Props) => {
  const {
    product: { img },
  } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img ? img : noImage}
      alt="product-img"
      style={style}
    />
  );
};
