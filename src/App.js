import Home from "./pages/Home";
import { User } from "./pages/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Github Searcher</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
