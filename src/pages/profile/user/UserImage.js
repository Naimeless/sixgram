import React, { Component } from "react";
import { UserInformation } from "./UserInformation";
import { photoAccount } from "../../../utils/constants.js"
        
export class UserImage extends Component{
    state={
        photoArr: photoAccount
    };

    render(){
        const photoPosts = this.state.photoArr.map((item)=>{
            return(
                <UserInformation key={item.id} 
                photo={item.photo} 
                />
            );
        });

        return(
            <>
                {photoPosts}
            </>
        )
    };
}