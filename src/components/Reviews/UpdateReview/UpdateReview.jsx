import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import RangeSlider from 'react-bootstrap-range-slider';
import reviewService from '../../../services/Review/reviewService'

import Swal  from 'sweetalert2'; 
import { useAuth } from '../../../hooks/useAuth'

export default function UpdateReview({gameId=null, review=null}) {
    const reviewData = Object.assign({}, review); 
    if(!review){
        reviewData.score = 0; 
        reviewData.text = ""; 
    }
    const [show, setShow] = useState(false);
    const [score, setScore] = useState(reviewData.score); 
    const [text, setText] = useState(reviewData.text); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const auth = useAuth(); 

    const userId = auth.user.id; 

    const sendRequest = () => {
        if(!review){}
        reviewService
            .updateReview(
                score, 
                text, 
                gameId, 
                userId, 
                review.id,
                () => {
                    handleClose(); 
                }, 
                (error) => {
                    console.log(error); 
                    errorMessage(error.message); 
                }, 
                userId); 
    }

    const errorMessage = (message) => {
        console.log(message); 
        Swal.fire({
            title: 'Something is wrong!',
            confirmButtonText: 'Ok',
            text: message,
            showCloseButton: true
        })
    }

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
                <Form.Control as="textarea" value={text} rows={3} onChange={(event) => setText(event.target.value)} />
                <p>Add your score</p>
                <RangeSlider id='Score'
                    value={score}
                    onChange={e => setScore(e.target.value)}
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
            <Button type="submit" variant="primary" onClick={() => sendRequest()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
