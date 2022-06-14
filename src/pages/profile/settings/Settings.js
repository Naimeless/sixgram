import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import apiImageUpload from "../../../api/profile/apiImageUpload";
import getToken from "../../../utils/getToken";
import userApi from "../../../api/profile/userApi";

function SettingsList(props) {
const [userId, setUserId] = useState();

const getUserId = async () => {
    const url = `http://192.168.0.122:85/api/v1/user/getuser`;
    await userApi(url, token)
    .then((res) => setUserId(res.id))
}

useEffect(() => {
    getUserId();
}, [])

const formData = new FormData();

const token = getToken();

async function imageUpload (formData) {
    const url = `http://192.168.0.122:85/api/v1/user/${userId}/changeavatar`;
    await apiImageUpload(url, formData, token)
    .then((data) => {debugger})
}

async function avatarSave(e) {
    
    e.preventDefault()
    const file = e.target.files[0];
    formData.append('file', file, file.name);
    console.log(formData.getAll('file'));   
}

async function onClicked(e) {
    const url = `http://192.168.0.122:85/api/v1/user/${userId}/changeavatar`;
    e.preventDefault();
    try{
        const response = await fetch(url, {
            method: 'PATCH',
            body: formData,
            headers: {
                    'Authorization': 'Bearer ' + token
                }
        });
        const result = await response.json();
        console.log("Успешно: ", JSON.stringify(result));
    } catch(error){
        console.error('Ошибка: ', error)
    }

}

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Settings
                </Modal.Title>
            </Modal.Header>
            
            
            <Modal.Body>
                <Form>
              
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>User name</Form.Label>
                        <Form.Control placeholder="Write new user name" type="text" />
                        <Button style={{marginTop: '1rem'}} variant="primary">Save</Button>
                    </Form.Group>
    
                    <Form.Group controlId="formFile" className="mb-3" method="PATCH">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control style={{paddingBottom: '2.2rem'}} type="file" onChange={avatarSave}/>
                        <Button id="avatarProfile" style={{marginTop: '1rem'}} variant="primary" onClick={onClicked}>Save</Button>
                    </Form.Group>
    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Write new description" type="text"/>
                        <Button style={{marginTop: '1rem'}} variant="primary">Save</Button>
                    </Form.Group>
    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Write new password" type="password"/>
                        <Button style={{marginTop: '1rem'}} variant="primary">Save</Button>
                    </Form.Group>
    
                </Form>
               
            </Modal.Body>
            
            <Modal.Footer style={{justifyContent: 'space-between'}}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
};
export default SettingsList