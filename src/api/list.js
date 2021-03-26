// 
import axios from './request'
export default {
  post: () =>
    axios.post(`${process.env.VUE_APP_API_BASE}/lists`, feed),
  uploadFile: (feedId, form) =>

    axios.post(`${process.env.VUE_APP_API_BASE}/Products/${feedId}/item-list`,
      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),
  // GET http://localhost:8080/feeds                
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/lists`),
  // DELETE http://localhost:8080/feeds/{id}
  del: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/lists/${id}`)
}