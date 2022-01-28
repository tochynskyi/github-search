import "./css/index.scss";
import { Home } from "./components/pages/Home";
import { User } from "./components/pages/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
	<div className="wrapper">
    <BrowserRouter>
		<h1 className='title'>Github Searcher</h1>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users/*" element={<User />} />
			</Routes>
		</BrowserRouter>
	 </div>
  );
}

export default App;
