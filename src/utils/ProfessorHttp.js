import axios from "axios";
import Store from '../store/store'
import { setLoadingState } from "../store/generalState"

const URL_PROD = "https://backallocation.herokuapp.com/";

const URL_LOCALHOST = "http://localhost:8080/";

const ProfessorHttp = axios.create({
    baseURL: URL_PROD
})

ProfessorHttp.interceptors.request.use(function (config) {


    Store.dispatch(setLoadingState(true))

    console.log('REQUEST')
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
ProfessorHttp.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Store.dispatch(setLoadingState(false))
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default ProfessorHttp