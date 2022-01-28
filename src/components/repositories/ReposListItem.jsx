import s from "./ReposListItem.module.scss"



const ReposListItem = ({rep}) => {

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<li className={s.repos} onClick={() => openInNewTab(rep.html_url)}>
			<div className={s.repos__name}>
				{rep.name}
			</div>
			<div className={s.repos__info}>
				<div>
					<span>{rep.forks_count}</span> Forks
				</div>
				<div>
					<span>{rep.stargazers_count}</span> Stars
				</div>
			</div>
		</li>
	)
}

export default ReposListItem
