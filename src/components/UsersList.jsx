import React from 'react'
import UsersListItem from './UsersListItem'
import {useSelector} from "react-redux";




function UsersList() {
	const users = useSelector(state => state.users.users)
	
	return (
		<ul>
			{users.length === 0 ? 'No users' : users.map(user => <UsersListItem 
				user={user} 
				key={user.id}/>
			)}
		</ul>
	)
}

export default UsersList
