import axios from 'axios'

export default(url = 'http://localhost:8082') => {
    return axios.create({baseURL: url})
}