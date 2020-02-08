import React from 'react';
import './App.css';
import { Route, Switch, Redirect, Link} from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users';

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false
  }


  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{" "}
          <Link to='/users'>Users</Link>{" "}
          <Link to='/shows'>Shows</Link>{" "}
          <Link to='/about'>About</Link>
        </nav>

        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
