import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { getAuthUserData, LogoutThunk } from '../../Redux/authReduser'

class HeaderContainer extends Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
    userId: state.Auth.userId
}}

export default connect(mapStateToProps, {  getAuthUserData, LogoutThunk })(HeaderContainer)
