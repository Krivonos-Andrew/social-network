import {Outlet} from 'react-router-dom'
import {Header} from '../Header/Header'
import {Navbar} from '../Nav/Navbar'
import s from './Layout.module.scss'

export const Layout = () => {
    // debugger
    return (
        <>
            <div className={s.container}>
                <Header/>
                <Navbar/>
                <main className={s.main}>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}