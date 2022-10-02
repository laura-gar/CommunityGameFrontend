import { useAuth } from "../../hooks/useAuth";
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

    logout(onSuccess, onError) {
        let evalData = JSON.parse(localStorage.getItem("user")); 
        const header = evalData.id; 

        return postRequest(
            `/logout`, 
            {},
            (userInfo) => {
              localStorage.clear(); 
              onSuccess(userInfo); 
            },
            onError, 
            header, 
            ); 
    }

    register(username, email, password, onSuccess, onError) {
        const body = {
            email, username, password
        }
        return postRequest(
            `/signup`, 
            body, 
            userInfo => {
                onSuccess(userInfo); 
            },
            onError); 
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