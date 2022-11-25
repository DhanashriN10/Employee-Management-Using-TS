import axios from "axios";

// const headerConfig = {
//     headers: {Authorization: localStorage.getItem('token')}
// }

export const getEmp = () => {
    let response = axios.get(`http://localhost:3200/employee/`)
    return response
}

export const DeleteEmp = (obj) => {
    let response = axios.delete(`http://localhost:3200/employee/${obj.id}`)
    return response
}

export const SubmitEmp = (obj) => {
    let response = axios.post(`http://localhost:3200/employee/`,obj)
    return response
}

export const UpdateEmp = (obj) => {
    let response = axios.put(`http://localhost:3200/employee/${obj.id}`,obj)
    return response
}

