import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {AppDispatch, RootState} from './store'


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// export const useAuth()  {
//     const {id, email, token} = useAppSelector(state => state.user)
//     return {
//         isAuth: !!email,
//         email,
//         token,
//         id
//     }
// }

