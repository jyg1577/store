<template>
  <v-container fill-height>
    <v-row class="justify-center">
      <v-col cols="3">
        <v-card class="mx-auto" max-width="600">
          <v-img
            alt="image
            "
            class="white--text align-end"
            height="550px"
            width="100%"
            src="http://image.auction.co.kr/itemimage/14/a5/ce/14a5ce9f36.jpg"
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-simple-table class="table">
          <template>
            <thead>
              <tr>
                <th>상품명</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div id="app" class="box">
          <p class="control">
            <button v-on:click="minusVal">-</button>
            <v-text-filed v-model="total" value="total">{{
              total
            }}</v-text-filed>

            <ion-icon
              name="chevron-up-circle-outline"
              @click="addVal()"
            ></ion-icon>
            <button>+</button>
            {{ product.price }}
          </p>
        </div>

        <div class="btn">
          <v-btn @click="mtCart()" color="orange" text>장바구니</v-btn>

          <v-btn color="orange" text>주문하기</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/product";
export default {
  data: () => ({
    id: "",
    product: [],
    check: true,
    total: 1,
  }),

  mounted() {
    this.getProductsId();
  },

  methods: {
    addVal() {
      this.total += 1;
    },
    minusVal() {
      if (this.total > 1) {
        this.total -= 1;
      } else {
        alert("1개이상만 주문가능합니다.");
      }
    },

    // 목록 조회 함수
    async getProductsId() {
      const id = this.$route.params.id;
      const result = await api.idSearch(id);
      if (result.status == 200) {
        this.product = result.data;
      }
    },
    mtCart() {
      const check = confirm("장바구니에 담으시겠습니까?");

      console.log(check);
      if (check == true) {
        this.$router.push("/Cart");
      }
    },
  },
};
</script>
<style>
.table {
  width: 100%;
}
.control {
  text-align: right;
}
.btn {
  text-align: center;
}
</style>