import React from "react";
import style from "./List.module.scss";

const List = ({ children }) => <ul className={style.list}>{children}</ul>;

export default List;
