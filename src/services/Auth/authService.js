import { postRequest } from "../Requests/requestService";

const USER_KEY = "user";

class AuthService {
    login(username, password, onSuccess, onError) {
        const body = {
            username, password
        }
        return postRequest(
            '/login',
            body,
            userInfo => {
                if (userInfo) {
                    localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
                }
                onSuccess(userInfo);
            },
            onError);
    }

    logout() {

    }

    register(username, email, password) {

    }

    getCurrentUser() {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return user;
    }
}

export default new AuthService();