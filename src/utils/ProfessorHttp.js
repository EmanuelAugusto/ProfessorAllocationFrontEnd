import axios from "axios";

const URL_PROD = "https://backallocation.herokuapp.com/";

const URL_LOCALHOST = "http://localhost:8080/";

const ProfessorHttp = axios.create({
    baseURL: URL_PROD
})


export default ProfessorHttp