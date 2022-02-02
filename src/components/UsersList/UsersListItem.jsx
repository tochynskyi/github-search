import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./UsersListItem.module.scss";

function UsersListItem({ user }) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const onUserClick = (name) => {
    navigate({
      pathname: "/github-search/users",
      search: `?u=${name}`,
      replace: true,
    });
  };

  return (
    <li className={style.user}>
      <div className={style.user__content} onClick={() => onUserClick(user.login)}>
        <div className={style.user__avatar}>
          <img src={user.avatar_url} alt={"User avatar"} />
        </div>
        <div className={style.user__name}>{user.login}</div>
      </div>
      <div className={style.user__dots} onClick={() => setDropdown(!dropdown)}>
        <ul className={dropdown ? style.user__dropdown__active : style.user__dropdown}>
          <li>
            <a href={user.html_url} target="_blank" rel="noreferrer noopener">
              View on GitHub
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default UsersListItem;
