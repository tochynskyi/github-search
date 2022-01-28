import { useSelector } from "react-redux";
import List from "../list/List";
import ReposListItem from "./ReposListItem";

const ReposList = ({ inputValue = "" }) => {
  const repos = useSelector((state) => state.repos.repos);

  const filterRep = () => {
    const rep = repos.filter(({ name }) =>
      name.toLowerCase().includes(inputValue)
    );
    return rep.length ? rep : repos;
  };

  return (
    <List>
      {filterRep().map((rep) => (
        <ReposListItem key={rep.id} rep={rep} />
      ))}
    </List>
  );
};

export default ReposList;
