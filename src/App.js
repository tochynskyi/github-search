import "./css/index.scss";
import { Home } from "./components/Pages/Home";
import { User } from "./components/Pages/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Github Searcher</h1>
      <Routes>
        <Route path="/github-search" element={<Home />} />
        <Route path="/github-search/users" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
