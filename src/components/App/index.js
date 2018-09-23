import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Todo from '../Todo';

const LogIn = () => <h1>Log In / Sing Up</h1>;

const App = () => (
  <div>
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route component={LogIn} path="/" exact />
          <Route component={Todo} path="/todo" />
        </Switch>
      </Fragment>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;