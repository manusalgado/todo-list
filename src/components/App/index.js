import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const TodoList = () => <h1>TodoList</h1>;
const LogIn = () => <h1>Log In / Sing Up</h1>;

const App = () => (
  <div>
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route component={LogIn} path="/" exact />
          <Route component={TodoList} path="/todo-list" />
        </Switch>
      </Fragment>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;