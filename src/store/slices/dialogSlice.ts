import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Message = {
    id: string,
    title: string
}

type MessagesState = {
    list: Message[]
}

const initialState: MessagesState = {
    list: []
}
const dialogSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
            })
        }
    }
})
export const {addMessage} = dialogSlice.actions
export default dialogSlice.reducer