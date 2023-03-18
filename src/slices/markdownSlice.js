import { createSlice } from '@reduxjs/toolkit';
import defaultText from '../example'

const initialState = {
    text: defaultText,
}

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        setMarkdown: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { setMarkdown } = markdownSlice.actions

export default markdownSlice.reducer