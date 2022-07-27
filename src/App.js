import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withSuspense } from './hoc/withSuspense'

import {
  ProfileContainer, HeaderContainer, NavbarContainer,
  Preloader, initializeApp
} from "./Imports/Imports"

import './App.css'

const DialogsContainer = lazy(() => import("./Componets/Dialogs/DialogsContainer"))
const LoginContainer = lazy(() => import("./Componets/Login/LoginContainer"))
const UsersContainer = lazy(() => import("./Componets/Users/UsersContainer"))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <div className='App'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='content'>
          <Switch>
            {/* <Suspense fallback={'dffdgh'}/> */}
            <Route exact path='/' render={() => <Redirect to='/profile' />} />

            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />

            <Route path='/users' render={withSuspense(UsersContainer)} />

            <Route path='/login' render={withSuspense(LoginContainer)} />

            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.App.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
