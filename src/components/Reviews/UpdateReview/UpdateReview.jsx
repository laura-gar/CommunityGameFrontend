import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import RangeSlider from 'react-bootstrap-range-slider';
import reviewService from '../../../services/Review/reviewService'
import Swal  from 'sweetalert2'; 

export default function UpdateReview({gameId=null, review=null}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button id="addReviewButton" variant="primary" onClick={handleShow}>
            Edit
        </Button>

        <Modal id="modal-container" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Add your review</Form.Label>
                <Form.Control as="textarea"  rows={3} />
                <p>Add your score</p>
                <RangeSlider id='Score'
                    tooltip='on'
                    min={1}
                    max={10}
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" variant="primary" >
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
