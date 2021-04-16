<template>
  <v-container fill-height>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-card class="mx-auto" max-width="600">
          <v-img
            alt="image"
            class="white--text align-end"
            width="590px"
            height="600px"
            :src="picture"
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-container style="display: flex">
          <div style="width: 100%">
            <h1>{{ product.name }}</h1>
            <p style="line-height: 50px">
              {{ product.shortDescription }}<br />
            </p>
            <p style="line-height: 30px">
              {{ product.description }}
            </p>
            <h3 style="margin-bottom: 250px" class="priceColor">
              {{ product.price }} 원
            </h3>
            <v-divider></v-divider>
            <div class="secondSection">
              <p>상품수량</p>
              <div>
                <button @click="minusVal" class="btn">-</button>
                <span>{{ total }}</span>
                <button @click="addVal" class="btn">+</button>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="thirdSecrion">
              <p>총 상품 금액</p>
              <h3 class="priceColor">{{ totalPrice }}원</h3>
            </div>
            <button class="goCart" @click="mtCart">장바구니</button>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/product";
import api2 from "@/api/cart";
export default {
  data: () => ({
    id: "",
    product: "",
    check: true,
    total: 1,
    totalPrice: 0,
    picture: "",
  }),

  mounted() {
    this.getProductsId();
  },

  methods: {
    addVal() {
      this.total += 1;
      this.totalPrice = this.product.price * this.total;
    },
    minusVal() {
      if (this.total > 1) {
        this.total -= 1;
        this.totalPrice = this.product.price * this.total;
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
        this.picture = result.data.images[0].dataUrl;
      }
      this.totalPrice = result.data.price;
      console.log("00000");
      console.log(result.data.images[0].dataUrl);
      console.log("00000");
    },
    async mtCart() {
      const info = {
        shortDescription: this.product.shortDescription,
        productName: this.product.name,
        price: this.totalPrice,
        quantity: this.total,
        category: this.product.category,
        dataUrl: this.picture,
      };

      const check = confirm("장바구니에 담으시겠습니까?");

      if (check == true) {
        const name = this.product.name;
        const result = await api2.productName(name);

        if (result.data.length == 0) {
          const cartlist = await api2.post(info);
          console.log(cartlist);
          this.$router.push("/cart");
        } else {
          const cartlist = await api2.quantity(
            result.data[0].id,
            this.total,
            this.totalPrice
          );
          console.log(cartlist);
          this.$router.push("/cart");
        }
      }
    },
  },
};
</script>
<style>
.secondSection {
  display: flex;
  justify-content: space-between;
}
.thirdSecrion {
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 30px;
  font-size: 20px;
}
.priceColor {
  color: darkred;
}
.goCart {
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border-radius: 10px;
}
.goCart:hover {
  background-color: cornflowerblue;
}
</style>