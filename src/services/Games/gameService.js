import { getRequest } from "../Requests/requestService";


class GameService {
    getGames(params, onSuccess, onError) {
        return getRequest(
            '/games',
            params,
            onSuccess,
            onError
        );
    }

}

export default new GameService();