import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import NavBar from './components/common/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/common/loginForm';
import RegisterForm from './components/common/registerForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={Movies} ></Route>
            <Route path='/customers' component={Customers} ></Route>
            <Route path='/rentals' component={Rentals} ></Route>
            <Route path='/not-found' component={NotFound} ></Route>
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
