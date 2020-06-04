import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import SmallTownPage from './SmallTownPage';
import TemplatePage from './TemplatePage';
import ComparationPage from './ComparationPage';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/small-town" component={SmallTownPage} />
      <Route path="/template-page" component={TemplatePage} />
      <Route path="/comparation" component={ComparationPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
