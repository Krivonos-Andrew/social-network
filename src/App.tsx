// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
// import {Dialogs} from "./Pages/Dialogs/Dialogs";
import {Settings} from './Pages/Settings/Settings'
import {Music} from './Pages/Music/Music'
import {News} from './Pages/News/News'
import {Layout} from './components/Layout/Layout'
import {Home} from './Pages/Home/Home'
import {Profile} from './Pages/Profile/Profile'
import {useAppSelector} from './hook.ts'

function App(): globalThis.JSX.Element {
    let posts = useAppSelector(state => state.posts.list)
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'Profile'} element={<Profile list={posts}/>}/>
                    {/*<Route path={'dialogs'} element={<Dialogs/>}/>*/}
                    <Route path={'news'} element={<News/>}/>
                    <Route path={'music'} element={<Music/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
