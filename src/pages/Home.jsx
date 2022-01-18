import React from 'react'
import SearchInput from '../components/SearchInput'
import UsersList from '../components/UsersList'
import { getUsersList } from '../fetch/fetchData';


export default function Home() {
	return (
		<div>
			<SearchInput placeholder={'Search for users...'} fetchFunc={getUsersList}/>
			<UsersList/>
		</div>
	)
}
