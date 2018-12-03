import React, { Component } from 'react';
import Navbar from './Components/Nav/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import AllBooks from './Components/allBooks'
import SingleBook from './Components/SingleBook'
import Dashboard from './Components/Dashboard'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path='/SignIn' component={ SignIn } />
              <Route path='/SignUp' component={ SignUp } />
              <Route exact path='/' component={ AllBooks } />
              <Route path='/:id' component={ SingleBook } />
              <Route path='/Dashboard' component = { Dashboard } />
            </Switch>            
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
