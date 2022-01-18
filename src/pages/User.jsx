import React, {useState} from 'react'
import {useSelector} from "react-redux";
import ReposList from '../components/ReposList';
import SearchInput from '../components/SearchInput';
import { getRepos } from '../fetch/fetchData';


export const User = () => {
	const [inputValue, setInputValue] = useState(null)
	const user = useSelector(state => state.user.user)
	console.log(inputValue);

	

	return (
		<div className='user'>
			<div className='user__avatar'>
				<img src={user.avatar_url} alt="avatar" />
			</div>
			<div className='user__info'>
				<ul>
					<li>User name: {user.name}</li>
					<li>Email: {user.email}</li>
					<li>Location: {user.location}</li>
					<li>Join date: {user.created_at}</li>
					<li>Followers: {user.followers}</li>
					<li>Following: {user.following}</li>
				</ul>
			</div>
			<div className='user__biographi'>
				{user.bio}
			</div>
			<div className="user__search-repositories">
				<SearchInput placeholder={`Search for User's Repositories`} inputValue={setInputValue} fetchFunc={getRepos} user={user.login}/>
				<ReposList inputValue={inputValue}/>
			</div>
		</div>
	)
}

