import axios from 'axios'

export const test = async (info) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/contact",info)
    return data
}

