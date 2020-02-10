import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users';
import Shows from './Components/Shows';
import NavBar from './Components/NavBar';
import AuthContainer from './Containers/AuthContainer'
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile'
import ShowPage from './Components/ShowPage';
import UserPage from './Components/UserPage';

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false,
    loadingUser: true
  }

  componentDidMount() {
    this.checkUserLoggedIn()
  }

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true,
      loadingUser: false
    })
  }

  checkUserLoggedIn = async () => {
    try {
      const { data } = axios.get("/auth/isUserLoggedIn")
      this.props.setUser(data.payload)
    } catch (err) {
      if (err.message.includes(401)) {
        this.setState({
          loadingUser: false
        })
      }
    }
    console.log('Checking if user logged in')
  }

  renderAuthContainer = () => {
    const { isUserLoggedIn } = this.state
    return <AuthContainer isUserLoggedIn={isUserLoggedIn} setUser={this.setUser} />
  }

  logoutUser = async () => {
    console.log('logging out user')
    try {
      await axios.get('/auth/logout')
      this.setState({
        user: null,
        isUserLoggedIn: false
      })
      this.props.history.push('/')
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  renderProfile = (routeprops) => {
    return <Profile routeprops={routeprops} user={this.state.user} />
  }

  renderShows = (routeprops) => {
    return <Shows routeprops={routeprops} user={this.state.user} />
  }

  renderShowPage = (routeprops) => {
    return <ShowPage routeprops={routeprops} user={this.state.user} />
  }

  render() {
    return (
      <div className="App">
        <NavBar 
        logoutUser={this.logoutUser}
        isUserLoggedIn={this.state.isUserLoggedIn}
        />

        <Switch>
          <PrivateRoute path='/profile' render={this.renderProfile} isUserLoggedIn={this.state.isUserLoggedIn} />
          <PrivateRoute path='/shows/:id' render={this.renderShowPage} isUserLoggedIn={this.state.isUserLoggedIn}/>
          <PrivateRoute path='/shows' render={this.renderShows} isUserLoggedIn={this.state.isUserLoggedIn} />
          <Route path='/user/:id' component={UserPage} />
          <Route path='/users' component={Users} />
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
