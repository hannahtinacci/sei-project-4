import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './auth/Register'
import Category from './components/Category'
import HabitForm from './components/HabitForm'
import UserProfile from './auth/UserProfile'
import Login from './auth/Login'
import EditUserProfile from './auth/EditUserProfile'
// import MainTracker from './components/MainTracker'
import ResourceIndex from './components/resources/ResourceIndex'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/auth/register">
          <Register />
        </Route>
        <Route  path="/auth/login">
          <Login />
        </Route>
        <Route  exact path="/auth/profile/:id">
          <UserProfile />
        </Route>
        <Route  exact path="/auth/profile/:id/edit">
          <EditUserProfile />
        </Route>
        <Route  path="/categories">
          <Category />
        </Route>
        <Route  path="/habits">
          <HabitForm />
        </Route>
        <Route  path="/resources">
          <ResourceIndex />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
