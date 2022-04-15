import React from "react";
import UserInformation from "./UserInformation";

  
const User = ({
    photo
    })  => {
        return(
            <div>
                <div className="page">
    
                    <UserInformation/>
    
                    <div className="images">
                        <div className="photos">
                            {photo}
                        </div>
                        <div className="photos">
                            {photo}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default User;