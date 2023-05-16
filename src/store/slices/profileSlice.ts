import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Post = {
    id: string,
    message: string,
}

export type PostsState = {
    list: Post[]
}

const initialState: PostsState = {
    list: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                message: action.payload,
            })
        }
    }
})

export const {addPost} = postSlice.actions
export default postSlice.reducer