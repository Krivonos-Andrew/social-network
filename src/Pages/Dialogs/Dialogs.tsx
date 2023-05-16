import {Message} from './Messages/Message'
import s from './Dialogs.module.scss'
import React from 'react'
import {useAppSelector} from '../../hook.ts'


export const Dialogs: React.FC = () => {
    const messages = useAppSelector(state => state.dialogs.list)

    let messageItems = messages.map(message => <Message {...message}/>)

    // let dialogItems: JSX.Element[] = dialogs
    // .map(dialog => <DialogItem/>)
    return (
        <>
            <div className={s.wrap}>
                <ul className={s.dialogItems}>
                    {/*{dialogItems}*/}
                </ul>
                <ul className={s.messages}>
                    {messageItems}
                </ul>
            </div>
        </>
    )
}
// console.log(state.dialogPage.messages)