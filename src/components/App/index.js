import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Footer from '../Footer';
import Header from '../Header';
import Todo from '../Todo';
import VisibleLogIn from '../../containers/VisibleLogIn';
import VisibleTodo from '../../containers/VisibleTodo';

const App = () => (
  <div>
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route component={VisibleLogIn} path="/" exact />
          <Route component={VisibleTodo} path="/todos" />
        </Switch>
      </Fragment>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;