import axios from "axios";


export function getprojects() {
    return axios.get('http://127.0.0.1:8000/project/')
    .then(res => {
        return res.data
    })
}

export function gettechs() {
    return axios.get('http://127.0.0.1:8000/tech/')
    .then(res => {
        return res.data
    })
}

export function getprogress() {
    return axios.get('http://127.0.0.1:8000/progress/')
    .then(res => {
        return res.data
    })
}

export function getaccomplishments() {
    return axios.get('http://127.0.0.1:8000/accomplishment/')
    .then(res => {
        return res.data
    })
}