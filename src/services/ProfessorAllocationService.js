import ProfessorHttp from "../utils/ProfessorHttp";


export const GetCourses = async (params) => {
    return await ProfessorHttp.get("courses")
}

export const GetCourseById = async (params) => {
    if (!params._id) {
        throw new Error("provide a id")
    }
    return await ProfessorHttp.get(`courses/${params._id}`)
}

export const SaveCourse = async (body) => {
    return await ProfessorHttp.post("courses", {
        ...body
    })
}

export const EditCourse = async (body) => {

    const { _id } = body

    return await ProfessorHttp.put(`courses/${_id}`, {
        ...body
    })
}

export const DeleteCourseById = async (body) => {

    const { _id } = body

    return await ProfessorHttp.delete(`courses/${_id}`)
}