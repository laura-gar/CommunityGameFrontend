const request = (url, params = {}, method = 'GET', onSuccess = null, onError = null, header = null) => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if(header != null){
        options.headers['User-id'] = header; 
    }

    if ('GET' === method) {
        url += '?' + new URLSearchParams(params);
    } else {
        options.body = JSON.stringify(params);
    }

    const handleError = (error) => {
        if (onError) {
            onError(error);
        }
        return error;
    }

    const handleSuccess = (data) => {
        if (onSuccess) {
            onSuccess(data);
        }
        return data;
    }

    return fetch(url, options)
        .then(
            (response) => {
                let textPromise = response.text();
                if(!response.ok){
                    return textPromise.then(Promise.reject.bind(Promise));
                }
                return textPromise; 
            }, 
            handleError
        )
        .then(
            (text) => {
                return text.length > 0 ? JSON.parse(text) : text; 
            }, 
            handleError)       
        .then(handleSuccess, handleError);
};

export const getRequest = (url, params, onSuccess, onError) => request(url, params, 'GET', onSuccess, onError);
export const postRequest = (url, body, onSuccess, onError) => request(url, body, 'POST', onSuccess, onError);
export const deleteRequest = (url, onSuccess, onError, header) => request(url, null, 'DELETE', onSuccess, onError, header); 