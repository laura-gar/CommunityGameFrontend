import { getRequest, postRequest, putRequest } from "../Requests/requestService";


class ReviewService {
    getReviewsByGame(gameId, onSuccess, onError) {
        getRequest(
            '/reviews',
            { gameId },
            onSuccess,
            onError);
    }

    updateReview(score, text, gameId, userId, reviewId, onSuccess, onError, header){
        putRequest(
            `/reviews/${reviewId}`, 
            {score, text, gameId, userId}, 
            onSuccess, 
            onError, 
            header); 
    }

}

export default new ReviewService();