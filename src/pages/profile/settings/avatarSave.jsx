// import React from "react";
// import ApiAvatar from "../../../api/profile/ApiAvatar";
// import getToken from "../../../utils/getToken";

// const avatarSave = () => {
//     const url = `http://192.168.0.122:85/api/v1/user/${content}/changeavatar`;
//     const formData = new FormData();
//     const token = getToken();

//     async function imageUpload (formData) {
//         await ApiAvatar(url, formData, token)
//         .then((data) => {debugger})
//     }

//     async function avatar(e) {
//         e.preventDefault()
//             const file = e.dataTransfer.files[0];
//             formData.append('file', file, file.name);
//             console.log(formData.getAll('file'));   
//         }
//     }

// export default avatarSave