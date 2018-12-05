import React, { Component } from 'react';
import Navbar from './Components/Nav/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import AllBooks from './Components/allBooks'
import SingleBook from './Components/SingleBook'
import Profile from './Components/Profile'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={ AllBooks } />
              <Route path='/SignIn' component={ SignIn } />
              <Route path='/SignUp' component={ SignUp } />
              <Route path='/Books/:id' component={ SingleBook } />
              <Route path='/Profile' component={ Profile } />
            </Switch>            
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
