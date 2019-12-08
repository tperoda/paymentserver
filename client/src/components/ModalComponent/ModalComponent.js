import React from "react";
import { Modal, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ModalComponent = () => {
  return (
    <Modal open>
      <Modal.Header>Please Login</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Manage Rates</Header>
          <p>
            This area is here to allow you to input and delete both Margin, and Markup values.
          </p>
          <p>Please login to use this functionality.</p>
        </Modal.Description>
        <Button className="modal-button">
          <Link to="/">Home</Link>
        </Button>
        <Button className="modal-button">
          <a href="/auth/google">Login</a>
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default ModalComponent;