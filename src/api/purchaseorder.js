// 
import axios from 'axios'
export default {
  post: (PurchaseOrder) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/PurchaseOrder`, PurchaseOrder),

  uploadFile: (PurchaseOrderId, form) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/PurchaseOrder/${PurchaseOrderId}/PurchaseOrder-Details`,

      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),

  idSave: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/PurchaseOrder/${id}`),

}