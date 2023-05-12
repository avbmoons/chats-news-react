import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";

import Profile from "../Screens/Profile/Profile.jsx";
import Home from "../Screens/Home/Home.jsx";
import Chats from "../Screens/Chats/Chats";
import NotFound from "../Screens/NotFound/NotFound.jsx";
import './Router.css';
import NoChats from "../Screens/NoChats/NoChats";

export function Router(){

    return <BrowserRouter>
    <ul className="Router-nav">
        <li className="Router-nav-item">
            <Link to={ROUTES.HOME} className="item">HOME</Link>    
        </li>
        <li className="Router-nav-item">
            <Link to={ROUTES.CHATS} className="item">CHATS</Link>   
        </li>
        <li className="Router-nav-item">
            <Link to={ROUTES.PROFILE} className="item">PROFILE</Link>   
        </li>
        {/* <li className="Router-nav-item">
            <Link to={ROUTES.NOT_FOUND} className="item">Not found</Link>   
        </li> */}

    </ul>

    <Routes>
        
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.CHATS} element={<Chats />}>
            <Route path={ROUTES.CHAT} element={<Chats />}>
        </Route>
            
        </Route>        
        <Route path={ROUTES.PROFILE} element={<Profile/>}></Route>

        <Route path={ROUTES.NO_CHAT} element={<NoChats/>}></Route>

        <Route path="*" element={<NotFound />}></Route>

    </Routes>
    </BrowserRouter>

};