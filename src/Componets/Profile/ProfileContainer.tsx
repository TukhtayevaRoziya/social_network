import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Profile } from './Profile'
import { getProfileData, getStatus, upDateStatus, savePhoto } from '../../Redux/ProfileReduser'
import { saveProfile } from '../../Redux/ProfileReduser'
import { ProfileType } from '../../types/types'
import { AppStateType } from '../../Redux/Store'

type PropsType = {
  match: any
  history: any
  authorizedUserId: number
  profile: ProfileType
  status: string

  upDateStatus: () => void
  savePhoto: () => void
  saveProfile: () => void
  getProfileData: (userId: number) => void
  getStatus: (userId: number) => void
}

class ProfileContainer extends Component<PropsType> {

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return nextProps !== this.props || nextState !== this.state
  }

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      debugger

      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
        debugger
        console.log(this.props.history);
        
      }
    }

    this.props.getProfileData(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      upDateStatus={this.props.upDateStatus}
      isOwner={!this.props.match.params.userId}
      savePhoto={this.props.savePhoto}
      saveProfile={this.props.saveProfile}
    />
  }
}

let mapStateToProps = (state: AppStateType) => ({
  authorizedUserId: state.Auth.userId,
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  isAuth: state.Auth.isAuth,
})

export default compose(
  connect(mapStateToProps, {
    getProfileData,
    getStatus, upDateStatus,
    savePhoto, saveProfile
  }),
  withRouter
)(ProfileContainer)