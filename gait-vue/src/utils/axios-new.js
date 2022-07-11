import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

export function postUpload (file) {
    return axios({
        url: 'upload',
        method: 'post',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}