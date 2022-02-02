import "./css/index.scss";
import { Home } from "./components/pages/Home";
import { User } from "./components/pages/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";

function App() {
  return (
	<div className="wrapper">
    <BrowserRouter history={history}>
		<h1 className='title'>Github Searcher</h1>
			<Routes>
			<Route path="github-search/" element={<Home />} />
			<Route path="github-search/users" element={<User />} />
			</Routes>
		</BrowserRouter>
	 </div>
  );
}

export default App;
