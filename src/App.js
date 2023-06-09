import React from "react";
import { Quiz } from "./components/quiz";
import { Home } from "./components/home/index";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/'} exact element={<Home/>}/>
          <Route path={'/quiz'} exact element={<Quiz/>}/>
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
