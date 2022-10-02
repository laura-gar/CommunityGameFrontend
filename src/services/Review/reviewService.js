import { getRequest, deleteRequest } from "../Requests/requestService";


class ReviewService {
    getReviewsByGame(gameId, onSuccess, onError) {
        getRequest(
            '/reviews',
            { gameId },
            onSuccess,
            onError);
    }

    deleteReview(reviewId, onSuccess, onError, header) {
        console.log("reviewId", reviewId); 
        deleteRequest(
            `/reviews/${reviewId}`, 
            onSuccess, 
            onError, 
            header); 
    }

}

export default new ReviewService();