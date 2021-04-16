<template>
  <div>
    <div class="image-container">
      <img src="../image/sidedish.jpg" />
    </div>
    <ul>
      <v-container class="pa-10">
        <v-row class="text-center">
          <v-col v-for="(item, i) in product" :key="i" cols="4">
            <v-card
              class="mx-auto"
              max-width="280"
              max-height="600"
              @click="mtDetailpage(item)"
            >
              <v-img
                class="white--text align-end"
                width="280px"
                height="300px"
                :src="item.images[0].dataUrl"
              >
              </v-img>
              <v-card-subtitle class="pb-0">{{ item.name }}</v-card-subtitle>
              <v-card-subtitle class="pb-0">{{
                item.shortDescription
              }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{ item.price }}원</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </ul>
  </div>
</template>

<script>
import api from "@/api/product";
export default {
  data: () => ({
    product: [],
    keyword: "반찬",
  }),
  mounted() {
    // 목록 조회 함수
    this.getProducts();
    // this.name = this.$router.params.item;
  },
  methods: {
    // 목록 조회 함수
    async getProducts() {
      const result = await api.category(this.keyword);
      console.log("result");
      console.log(result);
      console.log("result.data");
      console.log(result.data);
      if (result.status == 200) {
        this.product = result.data;
      }
      console.log(this.product);
    },
    mtDetailpage(item) {
      const id = item.id;
      console.log(id);
      this.$router.push("/Detailpage/" + id);
    },
  },
};
</script>