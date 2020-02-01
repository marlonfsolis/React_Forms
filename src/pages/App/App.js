import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import BsForm from '../BsForm/BsForm.page';
import ReactHookForm from '../ReactHookForm/ReactHookForm.page';
import HeaderBar from '../../components/header/HeaderBar.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <HeaderBar></HeaderBar>
        </header>
        <section>
          <Switch>
            <Route path="/bsform" component={BsForm} />
            <Route path="/rhform" component={ReactHookForm} />
            <Redirect from="/" to="/bsform" />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
