import React, { useEffect, useState } from "react";
import { UserImage } from "./UserImage";
import Settings from "../settings/Settings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Row } from "react-bootstrap";
import getCookie from "../../../utils/getCookie";
import getToken from "../../../utils/getToken";
import userApi from "../../../api/profile/userApi";
import apiTask from "../../../api/profile/apiTask";

const url = `http://192.168.0.122:85/api/v1/user/getuser`;
const User = () => {
    const token = getToken();
    const [avatarId, setavatarId] = useState();
    const [srcImage, setSrcImage] = useState('');
    const [isNeedUploadAvatar, setIsNeedUploadAvatar] = useState(false);

    const getavatarId = async () => {
        await userApi(url, token)
        .then((res) => setavatarId(res.avatarId))
    }

    useEffect(() => {
        setIsNeedUploadAvatar();
    }, [])

    useEffect(() => {
        getavatarId();
    }, [isNeedUploadAvatar])

    const urlTask = `http://192.168.0.122:90/api/v1/task/${avatarId}`
    const uploadAvatar = async () => {
       await apiTask(urlTask, token)
       .then((res) => {
        const byteArray = new Uint8Array(res)
        const blob = new Blob([byteArray])
        const fileReaderInstance = new FileReader()
        fileReaderInstance.readAsDataURL(blob)
        fileReaderInstance.onloadend = () => {
          if (fileReaderInstance.result) {
            setSrcImage(`data:image/jpeg;${fileReaderInstance.result.toString()}`);
          } else {
            throw Error(fileReaderInstance.error?.message)
          }
        }
        
        setIsNeedUploadAvatar(false)
    })
    }
    useEffect(() => {
        avatarId && uploadAvatar();
    }, [avatarId])
    
    const [modalShow, setModalShow] = React.useState(false);
    const nameUser = getCookie('nameUser');
    return(
        <>
            <div className="profile">
                <div className="avatar">
                    <img src={srcImage}/>
                </div>

                <div className="information">
                    <div className="user">
                        <h2 className="user_name">{nameUser}<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setModalShow(true)} className="tools" icon={faGear} /></h2>
                        <p style={{fontFamili: 'system-ui'}}>Subscribes: 20</p>
                        <p>Subscriptions: 15</p>
                        <p>Description: "Into the wind!"</p>
                    </div>
                </div>

            </div>

            <Row style={{justifyContent: 'center', margin: '0'}}>
                <UserImage/>
            </Row>

            <>
                <Settings
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </>
    )
}

export default User