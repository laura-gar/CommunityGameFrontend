import { getRequest } from "../Requests/requestService";


class ReviewService {
    getReviewsByGame(gameId, onSuccess, onError) {
        getRequest(
            '/reviews',
            { gameId },
            onSuccess,
            onError);
    }
}

export default new ReviewService();