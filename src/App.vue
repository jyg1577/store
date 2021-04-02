<template>
  <v-app>
    <v-tabs class="tabs" fixed-tabs v-model="selectedTab">
      <v-tab class="pa-0"
        ><router-link to="/" class="tab-menu">전체보기</router-link></v-tab
      >
      <v-tab class="pa-0"
        ><router-link to="/meat" class="tab-menu">육류</router-link></v-tab
      >
      <v-tab class="pa-0"
        ><router-link to="/sidedish" class="tab-menu">반찬</router-link></v-tab
      >
      <v-tab class="pa-0"
        ><router-link to="/fresh" class="tab-menu"
          >야채/과일</router-link
        ></v-tab
      >

      <v-tab class="pa-0"
        ><router-link to="/cart" class="tab-menu">장바구니</router-link></v-tab
      >
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