import styles from "./styles.module.css";

const Categories = ({ categories, setSelectCategory, selectCategory }) => {
  return (
    <div className={styles.categories}>
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
};

export default Categories;
