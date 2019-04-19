import axios from 'axios';

export const LOGGING_IN = "LOGGING_IN";

export const login = creds => dispatch => {
    dispatch({ type: LOGGING_IN });
    return axios 
            .post('http://localhost:5000/api/login', creds)
            .then(res => localStorage.setItem('token'), res.data.payload)
            .catch(err => console.log(`Error Logging In: ${err}`));
}

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios 
        .get('http://localhost:5000/api/friends', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCHING_FRIENDS, payload: res.data })
        })
        .catch(err => {
            console.log('GET failed: ', err.response);
        });
}