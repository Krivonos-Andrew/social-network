import {useAppDispatch} from '../hook.ts'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Form from './FormLogin.tsx'
import {useNavigate} from 'react-router-dom'
import {setUser} from '../store/slices/userSlice.ts'

export const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const goHome = () => navigate('/')

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                goHome()
            })
            .catch(console.error)
    }
    return (
        <>
            <Form
                title={'sign in'}
                handleClick={handleLogin}
            />
        </>
    )
}