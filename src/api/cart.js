// 
import axios from 'axios'
export default {
  post: (Cart) =>

    axios.post(`${process.env.VUE_APP_API_BASE}/Cart`, Cart),
  uploadFile: (CartId, form) =>

    axios.post(`${process.env.VUE_APP_API_BASE}/Cart/${CartId}/detail`,
      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),

  idSearch: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/Cart/${id}`),

}