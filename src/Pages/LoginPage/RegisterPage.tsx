import {Link} from 'react-router-dom'
import {SignUp} from '../../components/SignUp.tsx'


export const RegisterPage = () => {
    return (
        <>
            <h2>Register</h2>
            <SignUp/>
            <p>
                Already have an account?
                <Link to={'/login'}>
                    Sign in
                </Link>
            </p>
        </>
    )
}