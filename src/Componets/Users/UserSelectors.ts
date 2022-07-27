import { createSelector } from "reselect"
import { AppStateType } from '../../Redux/Store';

export const getUser = (state: AppStateType) => {
    return state.UsersPage.users
}

export const getUsers = createSelector(getUser, (users: any) => {
    return users.filter(() => true)
})
export const getPegeSize = (state: AppStateType) => {
    return state.UsersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.UsersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.UsersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.UsersPage.isFetching
}

export const getFollowInProgress = (state: AppStateType) => {
    return state.UsersPage.followInProgress
}
