import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";

function SearchInput({placeholder, fetchFunc, user, inputValue}) {
	const [value, setValue] = useState('');
	const dispatch = useDispatch()

	useEffect ( ()=> {
		dispatch(fetchFunc(value, user))
		!!value && inputValue(value.toLowerCase().trim())
	}, [value])
	// useEffect ( ()=> {
	// 	value === '' ? dispatch(setUsersList(sessionStorage.getItem('UsersList') === null ? [] : JSON.parse(sessionStorage.UsersList))) : dispatch(fetchFunc(value))
	// }, [value])


	return (
		<div>
			<input onChange={(e) => setValue(e.target.value)} placeholder={placeholder} style={{width: '100%'}}/>
		</div>
	)
}

export default SearchInput
