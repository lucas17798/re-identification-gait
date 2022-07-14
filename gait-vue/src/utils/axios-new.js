import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

export function postUpload (url,file) {
    return axios({
        url: url,
        method: 'post',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}