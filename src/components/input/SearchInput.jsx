import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import s from "./SearchInput.module.scss"


function SearchInput({ placeholder, fetchFunc, user, inputValue }) {
	const [value, setValue] = useState('');
	const dispatch = useDispatch()

	useEffect ( ()=> {
		!!value && dispatch(fetchFunc(value))
	}, [value])

	useEffect ( ()=> {
		!!user && dispatch(fetchFunc(value, user))
		!!inputValue && !!value && inputValue(value.toLowerCase().trim())
	}, [user, value])


	return (
		<div className={s.form__group}>
			<input className={s.form__field} id="inputName" type="text" onChange={(e) => setValue(e.target.value)} placeholder={placeholder}  autoComplete='off'/>
			<label className={s.form__label} htmlFor='inputName'>{placeholder}</label>
		</div>
	)
}

export default SearchInput
