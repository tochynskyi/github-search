import React, { useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import { getUser } from '../../fetch/fetchData'
import { useNavigate } from 'react-router-dom';
import s from "./UsersListItem.module.scss"



function UsersListItem({user}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selectedUser, setSelectedUser] = useState(null)
	const [active, setActive] = useState(false)


	useEffect(() => {
		if (selectedUser) {
			dispatch(getUser(selectedUser))
			navigate(`/users/${selectedUser}`)
			document.title = selectedUser
		}
	}, [selectedUser])


	const clickHandler = () => {
		active ? setActive(false) : setActive(true)
	}

	return (
		<li className={s.user}>
			<div className={s.user__content} onClick={() => setSelectedUser(user.login)}>
				<div className={s.user__avatar}>
					<img src={user.avatar_url} alt={'User avatar'}/>
				</div>
				<div className={s.user__name}>{user.login}</div>
			</div>
			<div className={s.user__dots} onClick={() => clickHandler()}>
				<ul className={active ? s.user__dropdown__active : s.user__dropdown}>
					<li>
						<a href={user.html_url} target='_blank' rel="noreferrer noopener">View on GitHub</a>
					</li>
				</ul>
			</div>
		</li>
	)
}

export default UsersListItem
