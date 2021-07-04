import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <div>
      <h1>ㅎㅇ</h1>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" exact component={Detail}></Route>
      </Router>
    </div>
  );
};

export default App;
