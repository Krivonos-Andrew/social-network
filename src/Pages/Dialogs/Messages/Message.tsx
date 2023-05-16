import s from './Messages.module.scss'
import React from "react";

type MessagePropsType = {
    id: string
    message: string,
}

export const Message: React.FC<MessagePropsType> = ({id, message}) => {
    return (
        <>
            <li className={s.message} key={id}>{message}</li>
        </>
    )
}