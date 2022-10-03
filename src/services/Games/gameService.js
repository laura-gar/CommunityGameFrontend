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

    sortGamesData(sorts, data) {
        if (!sorts) {
            return data;
        }
        const gamesToSort = data.slice();
        gamesToSort.sort(function (currentGame, nextGame) {
            for (const sort of sorts) {
                const sortColModel = sort;
                const colToSort = sortColModel.colId;
                let currentGamePropValue = currentGame[colToSort];
                let nextGamePropVal = nextGame[colToSort];
                if (colToSort === 'updatedAt') {
                    currentGamePropValue = new Date(currentGamePropValue);
                    nextGamePropVal = new Date(nextGamePropVal);
                }
                if (currentGamePropValue === nextGamePropVal) {
                    continue;
                }
                const sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
                if (currentGamePropValue > nextGamePropVal) {
                    return sortDirection;
                } else {
                    return sortDirection * -1;
                }
            }
            return 0;
        });
        return gamesToSort;
    }

}

export default new GameService();