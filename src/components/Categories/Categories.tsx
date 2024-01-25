import React, { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectCategory: (category: CategoriesType | null) => void;
  selectCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectCategory, selectCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectCategory ? styles.active : styles.item}
          onClick={() => setSelectCategory(null)}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={
                selectCategory === category ? styles.active : styles.item
              }
              onClick={() => setSelectCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
