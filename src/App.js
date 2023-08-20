import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Quote from "./pages/Quote";
import NewQuote from "./pages/form/NewQuote";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import useSingleFetch from "./hooks/useSingleFetch";
import LoggedInNav from "./components/LoggedInNav";
function App() {
  const { token } = useSingleFetch();
  // const loggedIn = JSON.parse(localStorage.getItem(loggedIn));
  // console.log(loggedIn);
  return (
    <div className="App">
      <Router>
        {token ? <Navbar /> : <LoggedInNav />}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/:id" element={<Quote />} />
          <Route path="/newquote" element={<NewQuote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
