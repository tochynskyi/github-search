import "./css/index.scss";
import { Home } from "./components/pages/Home";
import { User } from "./components/pages/User";
import { Routes, Route } from "react-router-dom";
import useQuery from "./hooks/useQuery";
function App() {
  const  {location} = useQuery();
  const baseURL = location.pathname
  
  return (
    <div className="wrapper">
      <h1 className="title">Github Searcher</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
