import { Navbar } from "./Navbar"
import axios from "axios";
import { useEffect, useState } from "react";

export const ToDo = () => {
    return (
        <div className="profile-pages">
        <Navbar/>
        <div className="page" >
            <div className="pageTop" >
                <h2>ToDo</h2>
                <div className="profile">
                    <img src="" alt="img" />
                    <p>Name</p>
                </div>
            </div>
            <hr />

            <div className="coming">
                <h1>COMING SOON</h1>
            </div>
        </div>
        </div>
    )
}