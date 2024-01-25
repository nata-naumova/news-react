import { getCategory } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCagories } = useFetch(getCategory);

  return (
    <div className={styles.filters}>
      {dataCagories ? (
        <Slider>
          <Categories
            categories={dataCagories.categories}
            selectCategory={filters.category}
            setSelectCategory={(category) => changeFilter("category", category)}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
