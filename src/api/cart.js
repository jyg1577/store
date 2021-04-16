// 
import axios from 'axios'
export default {
  // 정보저장
  post: (Cart) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/Cart`, Cart),

  // 사진저장
  uploadFile: (CartId, form) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/Cart/${CartId}/Cart-images`,
      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),
  // 수량
  quantity: (id, num, price) => axios.patch(`${process.env.VUE_APP_API_BASE}/Cart/${id}/quantity?num=${num}&price=${price}`),
  // id
  productName: (name) => axios.get(`${process.env.VUE_APP_API_BASE}/Cart/keyword?name=${name}`),
  // 장바구니 전체조회
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/Cart`),
  // id로 삭제
  del: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/Cart/${id}`),
  // 주문 상태변경(장바구니-> 결제) 
  cartOrder: (id) => axios.patch(`${process.env.VUE_APP_API_BASE}/Cart/${id}/order`)
}