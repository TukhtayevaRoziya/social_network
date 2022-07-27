import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Users } from './Users'
import { UsersType } from '../../types/types'
import { Preloader } from '../Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { follow, actions, requestUsers, unfollow } from '../../Redux/UsersReduser';
import {
    getCurrentPage, getFollowInProgress,
    getIsFetching, getPegeSize, getTotalUsersCount, getUser
} from './UserSelectors'
import { AppStateType } from '../../Redux/Store'


let setCurrentPage = actions.setCurrentPageAC

type MapStatePropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followInProgress: Array<number>
    users: Array<UsersType> | any
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (pageNumber: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader />
                    : <Users onPageChange={this.onPageChange}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        followInProgress={this.props.followInProgress} />}
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: getUser(state),
    pageSize: getPegeSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state)
})

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {
        follow, unfollow, setCurrentPage: setCurrentPage, requestUsers
    }),
    withAuthRedirect
)(UsersContainer)