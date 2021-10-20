import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,} from "react-router-dom";
import MainData from "./component/mainData/mainData";
import AddForm from "./component/form/addForm";
import Header from "./component/header/header"
const App = () => {
  return (
    <div className="container">
        <Router>
        <Header></Header>
        <Route path="/:id">
          <AddForm></AddForm>
        </Route>
        <Route path="/"exact>
          <MainData></MainData>
        </Route>
    </Router>
    </div>
  )
}

export default App;
