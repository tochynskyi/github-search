import React from 'react';
import s from "./List.module.scss"

const List = (props) => {
  return (
	<ul className={s.list}>
		{props.children}
	</ul>
  ) 
};

export default List;
