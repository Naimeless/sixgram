import React from "react";
import { Modal } from 'react-bootstrap';
import DragImage from "./DragImage";


function UploadImages(props){
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >        
            <Modal.Body>
                <DragImage/>
            </Modal.Body>
        </Modal>
        );
    }

export default UploadImages