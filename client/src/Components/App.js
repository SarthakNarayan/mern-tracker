import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../App.css";

// Components import
import Navbar from "./Navbar";
import ExerciseList from "./ExerciseList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/" component={ExerciseList} />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />
          <Route exact path="/user" component={CreateUser} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
