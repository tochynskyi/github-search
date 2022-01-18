import { useEffect } from "react";
import {useSelector} from "react-redux";
import ReposListItem from "./ReposListItem";



const ReposList = ({ inputValue = ''}) => {
	const repos = useSelector(state => state.repos.repos)
	
		const filterRep = () => {
			const rep = repos.filter(({name}) => name.toLowerCase().includes(inputValue))
			return rep.length ? rep : repos
		}

	return (
		<ul>
			{filterRep().map((rep) => <ReposListItem key={rep.id} rep={rep}/>)}
		</ul>
	)
}

export default ReposList
