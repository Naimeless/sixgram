import React from "react";
import ApiSettings from "../../api/profile/ApiSettings";

export const ProfileAPI = {} => {
    const onSubmit = (data) => {
        ApiAuthorization('http://192.168.0.122:85/api/v1/auth/login', data)
            .then((data) => {
            console.log(data);
            setIsLoggenIn(true);
            createTokenExpiration(data, true);
        });
}