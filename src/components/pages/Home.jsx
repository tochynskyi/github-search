import { useEffect } from "react";
import { getUsersList } from "../../fetch/fetchData";
import { useDispatch } from "react-redux";
import SearchInput from "../input/SearchInput";
import UsersList from "../users/UsersList";
import useQuery from "../../hooks/useQuery";

export const Home = () => {
  const { search } = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
	!!search && dispatch(getUsersList(search));
  }, [search]);

  return (
    <div>
      <SearchInput
        placeholder={"Search for users..."}
        fetchFunc={getUsersList}
      />
      <UsersList />
    </div>
  );
};
