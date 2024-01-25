import React from "react";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";
import { IFilters } from "../../interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useTheme } from "../../context/ThemeContext";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectCategory={filters.category}
            setSelectCategory={(category) => {
              dispatch(setFilters({ key: "category", value: category }));
            }}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          dispatch(setFilters({ key: "keywords", value: keywords }));
        }}
      />
    </div>
  );
};

export default NewsFilters;
