import s from './DialogItem.module.scss'

type propsType = {
    name: string,
    id: number
}


export const DialogItem = (props: propsType) => {
    return (
        <>
            <li className={s.item} key={props.id}>{props.name}</li>
        </>
    )
}