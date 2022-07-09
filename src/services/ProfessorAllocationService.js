import ProfessorHttp from "../utils/ProfessorHttp";


export const GetCourses = async (params) => {
    return await ProfessorHttp.get("courses")
}

export const GetCourseById = async (params) => {

    const { _id } = params

    if (!_id) {
        throw new Error("provide a id")
    }
    return await ProfessorHttp.get(`courses/${_id}`)
}

export const SaveCourse = async (body) => {
    return await ProfessorHttp.post("courses", {
        ...body
    })
}

export const EditCourse = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.put(`courses/${_id}`, {
        ...body
    })
}

export const DeleteCourseById = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.delete(`courses/${_id}`)
}

export const GetDepartments = async (params) => {
    return await ProfessorHttp.get("departaments")
}


export const GetDepartmentsById = async (params) => {

    const { _id } = params

    if (!_id) {
        throw new Error("provide a id")
    }
    return await ProfessorHttp.get(`departaments/${_id}`)
}

export const SaveDepartment = async (body) => {
    return await ProfessorHttp.post("departaments", {
        ...body
    })
}

export const EditDepartment = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.put(`departaments/${_id}`, {
        ...body
    })
}


export const DeleteDepartamentById = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.delete(`departaments/${_id}`, {
        ...body
    })
}


export const GetProfessors = async (params) => {
    return await ProfessorHttp.get("teachers")
}


export const SaveProfessor = async (body) => {
    return await ProfessorHttp.post("teachers", {
        ...body
    })
}

export const EditProfessor = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.put(`teachers/${_id}`, {
        ...body
    })
}

export const GetProfessorsById = async (params) => {

    const { _id } = params

    if (!_id) {
        throw new Error("provide a id")
    }
    return await ProfessorHttp.get(`teachers/${_id}`)
}

export const DeleteProfessorById = async (body) => {

    const { _id } = body

    if (!_id) {
        throw new Error("provide a id")
    }

    return await ProfessorHttp.delete(`teachers/${_id}`, {
        ...body
    })
}
