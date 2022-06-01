import React, { useEffect, useState } from "react";
import Header from "../header/Header.js";
import User from "./user/User.js";
import ApiAvatar from "../../api/profile/ApiAvatar.js";
import getToken from "../../utils/getToken.js";

const Profile = () => {
    const userId = "87ac5aa7-b5ed-4ff5-9c81-bde9382d581a";
    const token = getToken();
    const [posts, setPosts] = useState([]);
    const getUserPosts = () => {
            ApiAvatar(`http://192.168.0.122:91/api/v1/user/${userId}/post`, token)
                .then((data) => {
                    setPosts(data.posts);
            });}
    useEffect(() => {
        getUserPosts();
    }, [])

    return(
        <div>
            <div>
                <Header />
            </div>
            
            <div className="page">
                <User posts={posts}/>
            </div>

        </div>
    )
}

export default Profile