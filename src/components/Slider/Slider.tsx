import React, { useRef } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean;
}

const Slider = ({ children, step = 150, isDark }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={scrollLeft}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button className={styles.arrow} onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
