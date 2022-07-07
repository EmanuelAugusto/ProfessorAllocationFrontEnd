import axios from "axios";

const ProfessorHttp = axios.create({
    baseURL: "http://localhost:8080/"
})


export default ProfessorHttp