import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import { Switch, Route } from 'react-router-dom';
import Book from './Components/Book';
import Ticket from './Components/Ticket';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/book" component={Book} />
      <Route
        path="/ticket"
        render={(props) => <Ticket {...props} />}
      />
    </Switch>
  );
}

export default App;
