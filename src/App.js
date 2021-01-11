import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Inicio from './components/Inicio';
import Bla from './components/Bla';
import Parametros from './components/Parametros';
import User from './components/User';
import Firebase from './components/Firebase';
import Extintores from './components/Extintores';
import ExtintoresData from './components/ExtintoresData';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>&nbsp;&nbsp;
          <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>&nbsp;&nbsp;
          <Link to="/firebase" className="btn btn-dark">Firebase</Link>&nbsp;&nbsp;
          <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink>&nbsp;&nbsp;
          <Link to="/extintor" className="btn btn-dark">Extintores</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/bla">
            <Bla />
          </Route>
          <Route path="/firebase">
            <Firebase />
          </Route>
          <Route path="/users/:id" exact>
            <User />
          </Route>
          <Route path="/users">
            <Parametros />
          </Route>
          <Route path="/extintor/:id" exact>
            <ExtintoresData />
          </Route>
          <Route path="/extintor">
            <Extintores />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;