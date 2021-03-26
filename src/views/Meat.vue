<template>
  <div>
    <div class="image-container">
      <img src="../image/meat.jpg" />
    </div>
    <div @click="mtDetailpage">
      <item-list></item-list>
    </div>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  components: {
    ItemList,
  },
  data: () => ({}),
  methods: {
    mtDetailpage() {
      this.$router.push("/Detailpage");
    },
  },
};
</script>
