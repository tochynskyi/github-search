import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import ReposList from '../repositories/ReposList';
import SearchInput from '../input/SearchInput';
import { getRepos } from '../../fetch/fetchData';
import s from "./User.module.scss"



export const User = () => {
	// const [isLoading, setLoading] = useState(true)
	const [inputValue, setInputValue] = useState(null)
	const [open, setOpen] = useState(false)
	const user = useSelector(state => state.user.user)
	
	console.log(user);

	const clickHandler = () => {
		open ? setOpen(false) : setOpen(true)
	}

	const isShowBtn = user.bio.length > 65
	const date = new Date(user.created_at).toLocaleDateString()


	return (
		<div>
			<div className={s.user}>
				<div className={s.user__head}>
					<div className={s.user__avatar}>
						<img src={user.avatar_url} alt="avatar" />
					</div>
					<ul className={s.user__info}>
						<li>User name: <span>{user.name}</span> </li>
						<li>Email: <span>{user.email}</span> </li>
						<li>Location: <span>{user.location}</span> </li>
						<li>Join date: <span>{date}</span></li>
						<li>Followers: <span>{user.followers}</span> </li>
						<li>Following: <span>{user.following}</span> </li>
					</ul>
				</div>
				{user.bio && 
					<div className={s.user__biography}>
					<p className={open ? s.user__bioText__open : s.user__bioText}>{user.bio}</p>
					{isShowBtn && 
						<button className={s.user__btn} onClick={() => clickHandler()}>{open ? 'Hide' : 'Read more'}</button>
					}
					</div>
				}
			</div>
			<div className="search__rep">
				<SearchInput placeholder={`Search for User's Repositories`} inputValue={setInputValue} fetchFunc={getRepos} user={user.login}/>
				<ReposList inputValue={inputValue}/>
			</div>
		</div>
	)
}

