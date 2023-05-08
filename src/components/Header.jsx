import React from "react";
import style from '../styles/Categories.module.scss'
import { TfiVideoClapper } from "react-icons/tfi";

const Header = () => {
  return (
    <div className={style.logo}>
      <div className="d-flex align-items-start justify-content-center p-5">
        <TfiVideoClapper className={style.icon} />
        <h4>MOVIES</h4>
      </div>
    </div>
  );
};

export default Header;
