import axios from "axios";

const URL_PROD = null;

const URL_LOCALHOST = "http://localhost:8080/";

const ProfessorHttp = axios.create({
    baseURL: URL_LOCALHOST
})


export default ProfessorHttp