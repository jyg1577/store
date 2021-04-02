<template>
  <div>
    <div class="image-container">
      <img src="../image/sidedish.jpg" />
    </div>
    <item-list></item-list>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  components: {
    ItemList,
  },
  data: () => ({}),
};
</script>
