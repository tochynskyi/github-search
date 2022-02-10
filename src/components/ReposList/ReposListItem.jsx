import style from "./ReposListItem.module.scss";
import Icon from "../Icon/Icon";

const ReposListItem = ({ rep }) => {
  const openInNewTab = (url) => window.open(url);

	const {
    html_url,
    name,
    forks_count,
    stargazers_count,
  } = rep

  return (
    <li className={style.repos} onClick={() => openInNewTab(html_url)}>
      <div className={style.repos__name}>{name}</div>
      <div className={style.repos__info__container}>
        <div className={style.repos__info}>
          <span className={style.repos__info__number}>{forks_count}</span>
          <Icon icon='fork'/>
        </div>
        <div className={style.repos__info}>
		  <span className={style.repos__info__number}>{stargazers_count}</span>
          <Icon icon='star'/>
        </div>
      </div>
    </li>
  );
};

export default ReposListItem;
