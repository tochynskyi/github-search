import style from "./ReposListItem.module.scss";
import Icon from "../Icon/Icon";

const ReposListItem = ({ rep }) => {
  const openInNewTab = (url) => window.open(url);

  return (
    <li className={style.repos} onClick={() => openInNewTab(rep.html_url)}>
      <div className={style.repos__name}>{rep.name}</div>
      <div className={style.repos__info__container}>
        <div className={style.repos__info}>
          <span className={style.repos__info__number}>{rep.forks_count}</span>
          <Icon icon='fork'/>
        </div>
        <div className={style.repos__info}>
		  <span className={style.repos__info__number}>{rep.stargazers_count}</span>
          <Icon icon='star'/>
        </div>
      </div>
    </li>
  );
};

export default ReposListItem;
