import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then(res =>{
            // console.log("Users: ", res.data.users)
            setList(res.data.users)
          })
    }, [])

    return (
        <div className="home">
            <div className="users">
                <div className="top">
                    <h4>Select an account</h4>
                </div>
                <div className="bottom">
                   
                    {list.map((e) => (
                        <>
                        <Link to={`/users/${e.id}`} key={e.id} className="user">
                            <img src={`${e.profilepicture}`} alt="" />
                            {e.name}
                        </Link>
                        <hr />
                        </>
                    ))}
                </div>

            </div>

        </div>
    )
}