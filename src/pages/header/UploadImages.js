import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';


function UploadImages(props) {
    return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >        
        
        <Modal.Body>
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control style={{paddingBottom: '2.2rem'}} type="file"/>
                    <Button type="submit" style={{marginTop: '1rem'}} variant="primary">Upload</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    );
  }

export default UploadImages