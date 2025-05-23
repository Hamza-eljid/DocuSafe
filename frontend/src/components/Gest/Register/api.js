import axios from 'axios'

export const register = async (info) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/register",info)
    return data
}

