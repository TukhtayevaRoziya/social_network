import { InferActionTypes } from './Store'

type InitialStateType = [
    { id: number, path: string, name: string },
    { id: number, path: string, name: string },
    { id: number, path: string, name: string },
    { id: number, path: string, name: string },
    { id: number, path: string, name: string },
    { id: number, path: string, name: string }
]

const initialState: InitialStateType = [
    { id: 1, path: "profile", name: "Profile" },
    { id: 2, path: "dialogs", name: "Messages" },
    { id: 3, path: "news", name: "News" },
    { id: 4, path: "music", name: "Music" },
    { id: 5, path: "users", name: "Users" },
    { id: 6, path: "settings", name: "Settings" }
]

const SidebarReduser = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SIDEBAR':
            return state
        default:
            return state
    }
}
export default SidebarReduser

type ActionType = InferActionTypes<typeof actios>

const actios = {
    SidebarCreater: () => ({ type: 'SIDEBAR' })
}