import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReposList from "../repositories/ReposList";
import SearchInput from "../input/SearchInput";
import { getRepos, getUser } from "../../fetch/fetchData";
import s from "./User.module.scss";
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
  }, []);

  const isShowBtn = (bio) => (bio.length > 65 ? true : false);
  const date = (date) => new Date(date).toLocaleDateString();

  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className={s.user}>
            <div className={s.user__head}>
              <div className={s.user__avatar}>
                <img src={user.avatar_url} alt="avatar" />
              </div>
              <ul className={s.user__info}>
                <li>
                  User name: <span>{user.name}</span>
                </li>
                {user.email && (
                  <li>
                    Email: <span>{user.email}</span>
                  </li>
                )}
                <li>
                  Location: <span>{user.location}</span>
                </li>
                <li>
                  Join date: <span>{date(user.created_at)}</span>
                </li>
                <li>
                  Followers: <span>{user.followers}</span>
                </li>
                <li>
                  Following: <span>{user.following}</span>
                </li>
              </ul>
            </div>
            {user.bio && (
              <div className={s.user__biography}>
                <p className={open ? s.user__bioText__open : s.user__bioText}>
                  {user.bio}
                </p>
                {isShowBtn(user.bio) && (
                  <button
                    className={s.user__btn}
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "Hide" : "Read more"}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="search__rep">
            <SearchInput
              placeholder={`Search for User's Repositories`}
              inputValue={setInputValue}
            />
            <ReposList inputValue={inputValue} />
          </div>
        </div>
      )}
    </>
  );
};
