import React from "react";
import "../comments/Comments.css";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export const Comments = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Comments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="comments__div">
          <div>irintsa_</div>
          <div>Enchanted into this forest, by fluffs of silver me with a loaded rifle iwent hunting yesterday. The path is clean and smooth i passed, did not inherit ... Who was sneaking around here? Who fell and walked here?</div>
        </Modal.Body>
        <Modal.Footer>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Your comment"
              aria-label="Your comment"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Send
            </Button>
          </InputGroup>
        </Modal.Footer>
      </Modal>
    );
  }