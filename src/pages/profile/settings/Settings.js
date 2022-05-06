import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import ApiSettings from '../../../api/profile/ApiSettings';

function Settings(props) {
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
                    <Button type="submit" style={{marginTop: '1rem'}} variant="primary">Save</Button>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control style={{paddingBottom: '2.2rem'}} type="file" />
                    <Button id="avatarProfile" type="submit" style={{marginTop: '1rem'}} variant="primary">Save</Button>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Write new description" type="text"/>
                    <Button type="submit" style={{marginTop: '1rem'}} variant="primary">Save</Button>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Write new password" type="password"/>
                    <Button type="submit" style={{marginTop: '1rem'}} variant="primary">Save</Button>
                </Form.Group>

            </Form>
           
        </Modal.Body>
        
        <Modal.Footer style={{justifyContent: 'space-between'}}>
            <Button onClick={props.onHide}>Exit profile</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
  }

export default Settings