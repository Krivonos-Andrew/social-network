import React from "react";
import s from './Post.module.scss'

interface PostItemProps {
    id: string,
    src?: string,
    alt?: string,
    message: string,
}

export const Post: React.FC<PostItemProps> = (props) => {
    return (
        <li className={s.item}>
            <img
                className={s.img}
                src={props.src}
                alt={props.alt}/>
            <div className={s.text}>{props.message}</div>
        </li>
    )
}
