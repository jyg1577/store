<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <v-btn color="orange" text>주문하기</v-btn>
    <template>
      <v-switch class="pa-3"></v-switch>
    </template>
  </v-data-table>
</template>

<script>
import api from "@/api/purchaseorder";
export default {
  data: () => ({
    id: "",
    product: [],
  }),
  mounted() {
    this.getProductsId();
  },
  methods: {
    // 목록 조회 함수
    async getProductsId() {
      const id = this.$route.params.id;
      const result = await api.idSave(id);
      if (result.status == 200) {
        this.product = result.data;
      }
    },
  },
};
</script>
