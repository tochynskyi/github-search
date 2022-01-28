import { useLocation } from "react-router-dom";

const useQuery = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const search = query.get("s");
  const user = query.get("u")

  return { query, search, user};
};

export default useQuery;