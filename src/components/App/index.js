import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Footer from '../Footer';
import Header from '../Header';
import Todo from '../Todo';
import LogIn from '../LogIn';

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