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

    getGameById(gameId, onSuccess, onError) {
        return getRequest(
            '/games/' + gameId,
            {},
            onSuccess,
            onError);
    }

}

export default new GameService();