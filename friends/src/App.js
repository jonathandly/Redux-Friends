import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/friend-form">Add Friend</Link>
                <Link to="/protected">Friends</Link>
              </li>
            </ul>
          </nav>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendList} />
          <PrivateRoute exact path="/friend-form" component={FriendForm} />
        </div>
      </Router>
    );
  }
}

export default App;
