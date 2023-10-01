import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Profile } from "./Profile"
import { Posts } from "./Posts"
import { Gallery } from "./Gallery"
import { ToDo } from "./Todo"
import { Home } from "./Home"


export const Routers = () => {
    return (
        <div className="profile-page">

            {/* <Navbar/> */}
            <Routes>
                <Route path = "/" element={<Home/>} ></Route>
                <Route path = "/profile" element={<Profile/>} ></Route>
                <Route path = "/posts" element={<Posts/>}></Route>
                <Route path = "/gallery" element={<Gallery/>}></Route>
                <Route path = "/todo" element={<ToDo/>}></Route>
                <Route path = "/users/:userid" element={<Profile/>}></Route>


            </Routes>
        </div>
    )
}