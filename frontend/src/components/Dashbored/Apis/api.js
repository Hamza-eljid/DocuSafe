import axios from 'axios'

export const getuser = async (token,id) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/user",{id},{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}
