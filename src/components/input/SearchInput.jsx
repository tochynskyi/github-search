import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./SearchInput.module.scss";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

function SearchInput({ placeholder, inputValue }) {
  const { search } = useQuery();
  const navigate = useNavigate();
  const [value, setValue] = useState(search ?? '');
  const dispatch = useDispatch();

  useEffect(() => {
	  if (!inputValue) {
		navigate({
			search: !!value ? `?s=${value}` : "",
			replace: true,
		 });
	  } else {
		!!value && inputValue(value.toLowerCase().trim());
	  }
  }, [value]);


  return (
    <form className={s.form__group}>
      <input
        className={s.form__field}
        id="inputName"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
      <label className={s.form__label} htmlFor="inputName">
        {placeholder}
      </label>
    </form>
  );
}

export default SearchInput;
