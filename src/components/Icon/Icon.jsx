import React from "react";
import { ReactComponent as Fork } from "../../assets/fork.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import style from "./Icon.module.scss";

const Icon = ({ icon }) => {
  return (
    <div className={style.icon}>
      {icon === "star" && <Star className={style.icon__star} />}
      {icon === "fork" && <Fork className={style.icon__fork} />}
    </div>
  );
};

export default Icon;
