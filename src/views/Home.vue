
<template>
  <div>
    <div class="image-container">
      <img src="../image/home.jpg" />
    </div>
    <item-list></item-list>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data: () => ({}),
  methods: {},
};
</script>
<style>
.image-container {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
}
</style>