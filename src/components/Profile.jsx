import { useParams } from "react-router-dom"
import { Navbar } from "./Navbar"
import axios from "axios";
import { useEffect, useState } from "react";


export const Profile = () => {
    const {userid} = useParams();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then(res =>{
            console.log("Users: ", res.data.users)
            setUsers(res.data.users)
            setUser(users[userid-1])
            console.log("id", userid)
            console.log(users[userid-1])
        })
    }, [])

    




    return (
        <div className="profile-pages">
        <Navbar/>
     
        <div className="page" >
            <div className="pageTop" >
                <h2>Profile</h2>
                <div className="profile">
                    <img src="" alt="img" />
                    <p>Name</p>
                </div>
            </div>
            <hr />

            <div className="details">
                <div className="left">
                    <img src="" alt="photo" />
                    <p>Username: <span>Bret</span></p>
                    <p>Email: <span>email@emqaial.com</span></p>
                    <p>Phone: <span>9888888888</span></p>
                    <p>Website: <span>www.elelle</span></p>
                    <hr />
                    <p>Company</p>
                    <p>Name: <span>Bret</span></p>
                    <p>Catchphrase: <span>Bret</span></p>
                    <p>bs: <span>Bret</span></p>

                </div>
                <div className="right">
                    <p>Address: </p>
                    <p>Street: <span>Bret</span></p>
                    <p>Suite: <span>Bret</span></p>
                    <p>City: <span>Bret</span></p>
                    <p>Zipcode: <span>Bret</span></p>
                    <div>
                        <h2>MAP</h2>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}