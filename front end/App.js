import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path='/' exact component={Register}/>
          <Route path='/Login' exact component={Login}/>
      </Switch>
     </Router>
    </>
  );
}

export default App;
