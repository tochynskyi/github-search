import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./UsersListItem.module.scss";

function UsersListItem({ user }) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const onUserClick = (name) => {
    navigate({
      pathname: "/users",
      search: `?u=${name}`,
      replace: true,
    });
  };

  return (
    <li className={s.user}>
      <div className={s.user__content} onClick={() => onUserClick(user.login)}>
        <div className={s.user__avatar}>
          <img src={user.avatar_url} alt={"User avatar"} />
        </div>
        <div className={s.user__name}>{user.login}</div>
      </div>
      <div className={s.user__dots} onClick={() => setDropdown(!dropdown)}>
        <ul className={dropdown ? s.user__dropdown__active : s.user__dropdown}>
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
