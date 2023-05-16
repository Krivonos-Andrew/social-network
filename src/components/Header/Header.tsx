import c from './Header.module.scss'
import {removeUser} from '../../store/slices/userSlice.ts'
import {RegisterPage} from '../../Pages/LoginPage/RegisterPage.tsx'
import {useAppDispatch} from '../../hook.ts'
import {LoginPage} from '../../Pages/LoginPage/LoginPage.tsx'

export const Header = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <header className={c.header}>
                <img
                    className={c.logo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/1200px-Nextcloud_Logo.svg.png"
                    alt="Logo"/>
                <RegisterPage/>
                <LoginPage/>
                <div>
                    <button
                        onClick={() => dispatch(removeUser())}
                    >
                        Log out from
                    </button>
                </div>
            </header>
        </>
    )
}