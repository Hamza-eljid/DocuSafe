import axios from 'axios'

export const getuser = async (token,id) =>{
    const data = await axios.put("http://127.0.0.1:8000/api/user",{id},{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const getdocuments = async (token,id) =>{
    const data = await axios.patch("http://127.0.0.1:8000/api/documents",{id},{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const logout = async (token) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/logout",{},{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const setdocument = async (token,document) =>{
    const data = await axios.post("http://127.0.0.1:8000/api/documents",document,{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const deldocument = async (token,id) =>{
    
    
    const data = await axios.delete(`http://127.0.0.1:8000/api/documents/${id}`,{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const updateuser = async (token,data) =>{
    const res = await axios.post("http://127.0.0.1:8000/api/user",data,{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return res
}

export const upload_doc = async (token, id) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/documents_up",
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'blob', // <-- here, outside of headers
    }
  );
  return response;
};


export const get_doc = async(token,id)=>{
    const data = await axios.post("http://127.0.0.1:8000/api/document",{id},{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}

export const upd_doc = async(token,paylod)=>{
    const data = await axios.put("http://127.0.0.1:8000/api/documents",paylod,{
          headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                    },
    })
    return data
}




