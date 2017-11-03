import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link, NavLink,
} from 'react-router-dom';

import { ToolHeader } from './components/tool-header';
import { ColorPage } from './components/color-page';

const App = () => {

  return <Router>
    <div>
      <ToolHeader headerText="Color Tool" />
      <nav>
        <ul>
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/colors">Colors</NavLink></li>
        </ul>
      </nav>
      <Route exact path="/" render={ ({ history }) => {
        return <div>
          <h2>Home</h2>
          <p>Please click a menu link above to see other parts of the application.</p>
          <button type="button" onClick={() => history.push('/colors')}>Colors</button>
        </div>;
      }} />
      <Route exact path="/colors" component={ColorPage} />
      <Route path="/colors/:colorId/edit" render={ ({ match }) => {
        return <span>Editing {match.params.colorId}</span>; 
      }} />
      <footer>
        <small>Copyright 2017, A Cool Company, Inc.</small>
      </footer>
    </div>
  </Router>;
};

ReactDOM.render(
  <App />,
  document.querySelector('main')
);

