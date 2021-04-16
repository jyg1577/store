<template>
  <div class="container">
    <table class="tableBox">
      <thead>
        <tr>
          <td>
            <label class="form-checkbox">
              <input
                class="box"
                size="50px"
                type="checkbox"
                v-model="selectAll"
              />
              <i class="form-icon"></i>
            </label>
          </td>
          <td></td>
          <td>상품명</td>
          <td>상세설명</td>
          <td style="width: 100px">수량</td>
          <td style="width: 100px">가격</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cart" :key="i" class="tableRow">
          <td>
            <label class="form-checkbox">
              <input
                size="50px"
                type="checkbox"
                v-model="selected"
                :value="item.id"
              />
              <i class="form-icon"></i>
            </label>
          </td>
          <td>
            <v-img
              width="180px"
              height="180px"
              :src="item.dataUrl"
              alt=""
            ></v-img>
          </td>

          <td>{{ item.productName }}</td>
          <td>{{ item.shortDescription }}</td>
          <td>{{ item.quantity }}</td>
          <td style="font-size: 20px">{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btnBox">
      <v-btn class="bt" color="orange" text @click="cartOrder()"
        >구매하기</v-btn
      >

      <v-btn class="bt" color="orange" text @click="del()">삭제</v-btn>
    </div>
  </div>
</template>
<script>
import api2 from "@/api/cart";
export default {
  data: () => ({
    id: "",
    cart: [],
    all: [],
    selected: [],
    value: "",
  }),
  computed: {
    selectAll: {
      get: function () {
        return this.cart
          ? this.selected.length == this.cart.length &&
              this.selected.length != 0
          : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.cart.forEach(function (item) {
            selected.push(item.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  mounted() {
    this.getProductsId();
  },
  methods: {
    // 목록 조회 함수
    async getProductsId() {
      const cartlist = await api2.list();

      if (cartlist.status == 200) {
        this.cart = cartlist.data;
        this.all = cartlist.data;
        console.log("얍");
        console.log(this.cart);
        console.log("얍");
      }
    },

    async del() {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        for (var x in this.selected) {
          console.log(this.cart[i].id + "---------------" + this.selected[x]);
          if (this.cart[i].id == this.selected[x]) {
            this.cart.splice(i, 1);
            await api2.del(this.selected[x]);
            break;
          }
        }
      }
      this.selected = false;
      location.reload();
    },

    async cartOrder() {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        for (var x in this.selected) {
          console.log(this.cart[i].id + "---------------" + this.selected[x]);
          if (this.cart[i].id == this.selected[x]) {
            this.cart.splice(i, 1);
            await api2.cartOrder(this.selected[x]);
            break;
          }
        }
      }
      alert("주문완료!");
      this.selected = false;
      location.reload();
    },
  },
};
</script>
<style scoped>
.tableBox {
  width: 100%;
  margin: 0 auto;
  height: 600px;
}
.bt {
  font-size: 20px;
}
.btnBox {
  float: right;
  margin-top: 10px;
}
.container {
  width: 70%;
  margin: 0 auto;
}
td {
  height: 60px;
  border-bottom: 1px solid lightgray;
  text-align: center;
}
.box {
  width: 101px;
}
.tableRow > td {
  height: 220px;
}
</style>