import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/profile" className="menu">Profile</Link>
            <hr />
            <Link to="/posts" className="menu">Posts</Link>
            <hr />
            <Link to="/gallery" className="menu">Gallery</Link>
            <hr />
            <Link to="/todo" className="menu">ToDo</Link>
        </div>
    )
}