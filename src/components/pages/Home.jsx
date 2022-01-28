import React from 'react'
import { getUsersList } from '../../fetch/fetchData';
import SearchInput from '../input/SearchInput';
import UsersList from '../users/UsersList'


export const Home = () => {
	return (
		<div>
			<SearchInput placeholder={'Search for users...'} fetchFunc={getUsersList}/>
			<UsersList/>
		</div>
	)
}
