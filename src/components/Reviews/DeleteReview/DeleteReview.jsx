import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
import './DeleteReview.css';
import { AiFillDelete } from 'react-icons/ai'
import reviewService from '../../../services/Review/reviewService'
import Swal from 'sweetalert2';
import { useAuth } from '../../../hooks/useAuth';



export default function DeleteReview({ reviewId, change }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const auth = useAuth();
    const userId = auth.user.id;

    const sendRequest = () => {
        reviewService
            .deleteReview(
                reviewId,
                () => {
                    handleClose();
                    change(true);
                },
                (error) => {
                    console.log(error);
                    errorMessage(error.message);
                },
                userId);
        change(false);
    }

    const errorMessage = (message) => {
        Swal.fire({
            title: 'Something is wrong!',
            confirmButtonText: 'Ok',
            text: message,
            showCloseButton: true
        })
    }

    return (
        <>
            <Button id="deleteReviewButton" onClick={handleShow}>
                <AiFillDelete />
            </Button>

            <Modal id="modal-container" show={show} onHide={handleClose}>
                <Modal.Body>
                    <p id="deleteIcon" className="text-center"><AiFillDelete />  </p>
                    <Modal.Title id="deleteTitle" className="h1 text-center">Delete Review</Modal.Title>
                    <p className="h4 text-center">This will delete your review for this game</p>
                </Modal.Body>
                <Modal.Footer className='border-0'>
                    <Button id="cancel-button" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button id="delete-button" type="submit" variant="primary" onClick={() => sendRequest()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
