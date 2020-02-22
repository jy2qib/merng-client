import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';  //import AuthRoute.js - Login and Logout display

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Posts from './pages/Posts';  //include component file Posts.js
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {  //For Menu Item Layout see MenuBar.js
  return (
    <AuthProvider>
      <Router>
          <Container fluid>           {/* fluid extends page edge to edge */}
           <MenuBar  />                                        {/* MenuBar Layout Position */}
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={Posts} />   {/* specifies /posts route and component {Posts} js */}
            <AuthRoute exact path='/login' component={Login} /> 
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
