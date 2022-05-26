import React from "react";
import Header from "../header/Header.js";
import Posts from "../news/posts/Posts.js";


function News(){

    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Posts />
            </div>
        </div>
    )
}

export default News