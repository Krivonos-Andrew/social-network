import s from './Home.module.scss'


export const Home = () => {

    // const {isAuth, email} = useAuth()

    return (
        <>
            <div className={s.wrap}>
                <h1 className={s.title}>Добро пожаловать!</h1>
                <img src="https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625"
                     alt=""/>
            </div>

        </>
    )
}