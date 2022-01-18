import React, { useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import { getUser } from '../fetch/fetchData'
import { useNavigate } from 'react-router-dom';


const style = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	border: '1px solid #ccc',
	borderRadius: '4px',
	margin: '10px 0',
	padding: '5px 10px',
}


function UsersListItem({user}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selectedUser, setSelectedUser] = useState(null)


	useEffect(() => {
		if (selectedUser) {
			dispatch(getUser(selectedUser))
			navigate(`/user/${selectedUser}`)
			document.title = selectedUser
		}
	}, [selectedUser])
	
	return (
		<li onClick={() => setSelectedUser(user.login)} style={style}>
			<img style={{width: '50px', height: '50px'}} src={user.avatar_url} alt={'User avatar'}/>
			{user.login}
		</li>
	)
}

export default UsersListItem
