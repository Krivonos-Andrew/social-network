import s from './PostSend.module.scss'
import {useAppDispatch} from '../../../../hook.ts'
import {addPost} from '../../../../store/slices/profileSlice.ts'
import React, {useState} from 'react'

export const PostSend = () => {
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const addTask = () => {
        dispatch(addPost(value))
        setValue('')
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
        (e) => {
            if (e.key === 'Enter') addTask()
        }
    return (
        <>
            <div className={s.wrap}>
                <h2 className={s.title}>My posts</h2>
                <input
                    className={s.input}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className={s.btn}
                    onClick={addTask}
                >
                    Add post
                </button>
            </div>
        </>
    )
}