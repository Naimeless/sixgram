import React from "react";
import User from "./User";
import { photoAccount } from "../../../utils/constants";
        
function UserImage(){
    const Photos = photoAccount.map((item)=>{
        return(
            <User key={item.id} 
            photo={item.photo} 
            />
        );
    });
}

export default UserImage;