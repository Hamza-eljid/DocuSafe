import axios from 'axios'

export const loginApi = async (info) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/login",info)
    return data
}
