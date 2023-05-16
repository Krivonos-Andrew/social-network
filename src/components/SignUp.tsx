import Form from './FormLogin.tsx'
import {useAppDispatch} from '../hook.ts'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {setUser} from '../store/slices/userSlice.ts'
import {useNavigate} from 'react-router-dom'


export const SignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const goHome = () => navigate('/')
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user.uid)
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
                title={'register'}
                handleClick={handleRegister}

            />
        </>
    )
}

