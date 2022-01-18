import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";


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
		<div>
			<input onChange={(e) => setValue(e.target.value)} placeholder={placeholder} style={{width: '100%'}}/>
		</div>
	)
}

export default SearchInput
