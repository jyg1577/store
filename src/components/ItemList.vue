<template>
  <div>
    <ul>
      <li v-for="(item, i) in list" :key="i">{{ item.text }}</li>
      <v-container class="pa-10">
        <v-row class="text-center">
          <v-col cols="3">
            <v-card class="mx-auto" max-width="280" max-height="600">
              <v-img
                class="white--text align-end"
                width="500px"
                height="300px"
                src="../image/c.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-0">{{ product.name }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>상품설명</div>
                <div>가격</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </ul>
  </div>
</template>

<script>
export default {
  name: "item-list",
  props: ["list"],
};
</script>
