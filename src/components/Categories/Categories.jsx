import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
  ({ categories, setSelectCategory, selectCategory }, ref) => {
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
