import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReposList from "../ReposList/ReposList";
import SearchInput from "../SearchInput/SearchInput";
import { getRepos, getUser } from "../../fetch/fetchData";
import style from "./User.module.scss";
import useQuery from "../../hooks/useQuery";

export const User = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const user = useSelector((state) => state.user.user);

  const [inputValue, setInputValue] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getUser(query.user));
    dispatch(getRepos(query.user));
  }, [query.user]);

  const isShowBtn = (bio) => (bio.length > 65 ? true : false);
  const date = (date) => new Date(date).toLocaleDateString();

  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className={style.user}>
            <div className={style.user__head}>
              <div className={style.user__avatar}>
                <img src={user.avatar_url} alt="avatar" />
              </div>
              <ul className={style.user__info}>
                {user.name && (
                  <li>
                    User name: <span>{user.name}</span>
                  </li>
                )}
                {user.email && (
                  <li>
                    Email: <span>{user.email}</span>
                  </li>
                )}
                {user.location && (
                  <li>
                    Location: <span>{user.location}</span>
                  </li>
                )}
                {user.created_at && (
                  <li>
                    Join date: <span>{date(user.created_at)}</span>
                  </li>
                )}
                {user.created_at && (
                  <li>
                    Followers: <span>{user.followers}</span>
                  </li>
                )}
                {user.created_at && (
                  <li>
                    Following: <span>{user.following}</span>
                  </li>
                )}
              </ul>
            </div>
            {user.bio && (
              <div className={style.user__biography}>
                <p className={open ? style.user__bioText__open : style.user__bioText}>
                  {user.bio}
                </p>
                {isShowBtn(user.bio) && (
                  <button
                    className={style.user__btn}
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "Hide" : "Read more"}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className={style.search__wrapper}>
            <SearchInput
              placeholder={`Search repositories`}
              inputValue={setInputValue}
            />
            <ReposList inputValue={inputValue} />
          </div>
        </div>
      )}
    </>
  );
};
