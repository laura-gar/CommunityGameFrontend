export const postRequest = jest.fn((url, body, onSuccess, onError) => {return Promise.resolve({body}, onSuccess, onError)}) 

const mock = jest.fn().mockImplementation ( () => {
    return {postRequest: postRequest}
})

export default mock; 