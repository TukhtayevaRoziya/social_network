import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReduser } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import SidebarReduser from './SidebarReduser'
import ProfileReduser from './ProfileReduser'
import DialogReduser from './DialogReduser'
import UsersReduser from './UsersReduser'
import AuthReduser from './authReduser'
import AppReduser from './appReduser'

const rootReducers = combineReducers({
    ProfilePage: ProfileReduser,
    DialogPage: DialogReduser,
    UsersPage: UsersReduser,
    Sidebar: SidebarReduser,
    Auth: AuthReduser,
    App: AppReduser,
    form: formReduser
})

type RootRedusersType = typeof rootReducers
export type AppStateType = ReturnType<RootRedusersType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args:any[])=>any}> = ReturnType<PropertiesType<T>>

// @ts-ignore

const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, compoceEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore

window.__store__ = store

export default store