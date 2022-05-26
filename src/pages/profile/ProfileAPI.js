import ApiSettings from "../../api/profile/ApiSettings";

function ProfileAPI() {
    const profilePhoto = (data) => {
        ApiSettings('http://192.168.0.122:85/api/v1/user/{id}/post', data)
            .then((data) => {
            console.log(data);
        });
    }
}
export default ProfileAPI;