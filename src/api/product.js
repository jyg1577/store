// 
import axios from 'axios'
export default {
  post: (product) =>

    axios.post(`${process.env.VUE_APP_API_BASE}/products`, product),
  uploadFile: (productId, form) =>

    axios.post(`${process.env.VUE_APP_API_BASE}/products/${productId}/product_image`,
      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),

  idSearch: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/products/${id}`),
  // GET http://localhost:8080/Products                
  category: (keyword) => axios.get(`${process.env.VUE_APP_API_BASE}/products/search/category?keyword=${keyword}`),
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/products`),
  // DELETE http://localhost:8080/Products/{id}
  del: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/products/${id}`),
  imageSearch: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/products/${id}/product-images`)

}