<template>
  <div>
    <div class="image-container">
      <img src="../image/sidedish.jpg" />
      <!-- https://cdn.pixabay.com/photo/2020/10/07/01/43/stir-fry-5633755_960_720.jpg -->
    </div>
    <item-list :list="items"></item-list>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  components: {
    ItemList,
  },
  data: () => ({
    items: [{ text: "food1" }, { text: "food2" }, { text: "food3" }],
  }),
};
</script>
