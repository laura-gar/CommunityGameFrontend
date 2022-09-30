import { postRequest } from "../Requests/requestService";

const USER_KEY = "user";
const URL = process.env.REACT_APP_BASE_URL; 
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

    logout(onSuccess, onError) {
        let evalData = JSON.parse(localStorage.getItem("user")); 
        console.log(evalData);
        const header = evalData.id; 
        console.log(header);
        return postRequest(
            `${URL}/logout`, 
            {},
            () => {
              localStorage.clear(); 
            },
            onError, 
            header, 
            ); 
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