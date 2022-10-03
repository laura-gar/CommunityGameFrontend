import requestService, {postRequest} from "../Requests/requestService";
import authService from "./authService";

jest.mock('../Requests/requestService');

const mockUsername = "mockUser"; 
const mockEmail = "mockEmail"; 
const mockPassword = "mockPassword"; 
const onSuccess = userInfo => {}; 
const onError = () => {};

beforeEach(() => {
    requestService.mockClear(); 
})

test('login request', async () => {
    const returnPromise = await authService.login(mockUsername, mockPassword, onSuccess, onError);
    expect(postRequest).toHaveBeenCalledTimes(1); 
    expect(postRequest).toHaveBeenCalledWith('/login', {username: mockUsername, password: mockPassword}, expect.any(Function), onError); 
  } 
);

test('signup request', async () => {
    const returnPromise = await authService.register(mockUsername, mockEmail, mockPassword, onSuccess, onError);
    expect(postRequest).toHaveBeenCalledTimes(1); 
    expect(postRequest).toHaveBeenCalledWith('/signup', {email:mockEmail, username: mockUsername, password: mockPassword}, expect.any(Function), onError); 
})