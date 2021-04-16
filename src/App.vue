<template>
  <v-app>
    <v-tabs class="tabs" fixed-tabs v-model="selectedTab">
      <v-tab class="pa-0" to="/"> 전체보기</v-tab>
      <v-tab class="pa-0" to="/meat"> 육류</v-tab>
      <v-tab class="pa-0" to="/sidedish"> 반찬</v-tab>
      <v-tab class="pa-0" to="/fresh"> 야채/과일 </v-tab>

      <v-tab class="pa-0" to="/cart"> 장바구니</v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-app>
</template>
<style scoped>
.tab-menu {
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  line-height: 3rem;
}
.tabs {
  flex: 0;
}
</style>
  
<script>
export default {
  name: "App",
  data: () => ({
    selectedTab: 0,
  }),
  methods: {},
  mounted() {
    // 현재 route 경로를 읽어서 focus를 바꿔야함
    ("/");
    this.selectedTab = 0;
  },
};
</script>