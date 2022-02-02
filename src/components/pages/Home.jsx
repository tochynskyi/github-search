import { useEffect } from "react";
import { getUsersList } from "../../fetch/fetchData";
import { useDispatch } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import UsersList from "../UsersList/UsersList";
import useQuery from "../../hooks/useQuery";

export const Home = () => {
  const { search } = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    !!search && dispatch(getUsersList(search));
  }, [search]);

  return (
    <div>
      <SearchInput placeholder={"Search for users..."} />
      <UsersList />
    </div>
  );
};
