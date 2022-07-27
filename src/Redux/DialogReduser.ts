import { InferActionTypes } from './Store'

type DialogUserDataType = {
    id: number
    url: number
    name: string
}

type DialogMessegeDataType = {
    id: number
    message: string
}

const initialState = {
    Users: [
        { id: 1, url: 1, name: "Oleg" },
        { id: 2, url: 2, name: "Andrey" },
        { id: 3, url: 3, name: "Natasha" },
        { id: 4, url: 4, name: "Sasha" },
        { id: 5, url: 5, name: "Sveta" },
    ] as Array<DialogUserDataType>,
    Messages: [
        { id: 1, message: "hello 2" },
        { id: 2, message: "hello adrey" },
        { id: 3, message: "haha" },
        { id: 4, message: "net" },
        { id: 5, message: "Salofsdgf" },
    ] as Array<DialogMessegeDataType>
}

export type DialogsType = typeof initialState


const DialogReduser = (state = initialState, action: ActionsType): DialogsType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let stateCopy = { ...state }
            stateCopy.Messages = [...state.Messages]

            let NewMessage = {
                id: stateCopy.Messages.length + 1,
                message: action.newMessageData,
            }
            stateCopy.Messages.push(NewMessage)
            action.newMessageData = ''

            return stateCopy

        default:
            return state
    }
}

type ActionsType = InferActionTypes<typeof actions>

export default DialogReduser

export const actions = {
    SendMessageAC: (newMessageData: string) => ({ type: 'ADD_MESSAGE', newMessageData })
}
debugger