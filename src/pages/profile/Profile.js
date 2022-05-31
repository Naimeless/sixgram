import React from "react";
import Header from "../header/Header.js";
import User from "./user/User.js";

const Profile = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            
            <div className="page">
                <User/>
            </div>

        </div>
    )
}

export default Profile