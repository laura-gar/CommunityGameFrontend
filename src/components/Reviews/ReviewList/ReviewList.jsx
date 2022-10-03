import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import reviewService from '../../../services/Review/reviewService';
import Review from '../Review/Review';
import ReviewModal from '../ReviewModal/ReviewModal';

function ReviewList({ gameId }) {
    const auth = useAuth();
    const [reviews, setReviews] = useState([]);
    const [areReviewsChanges, setChangesReviews] = useState(false);
    useEffect(() => {
        reviewService.getReviewsByGame(gameId,
            (reviews) => {
                setReviews(reviews);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [gameId, areReviewsChanges]);
    let userHasReviewed = false;
    const reviewsToRender = reviews.map((reviewData) => {
        if (reviewData.user?.id === auth.user.id) {
            userHasReviewed = true;
        }
        return <Review key={reviewData.id} review={reviewData} change={setChangesReviews} />
    });
    return (
        <div className='card p-5'>
            <div className="row mb-4">
                <div className="col d-flex justify-content-between">
                    <h2>Reviews</h2>
                    {!userHasReviewed ? <ReviewModal gameId={gameId} change={setChangesReviews} /> : null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {reviewsToRender}
                </div>
            </div>
        </div>
    )
}


export default ReviewList
