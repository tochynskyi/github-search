import React from "react";
import s from "./List.module.scss";

const List = ({ children }) => <ul className={s.list}>{children}</ul>;

export default List;
