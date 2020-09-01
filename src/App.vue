<template>
  <div id="app">
    <Button />
    <Card />
    <image1 />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Image from "./components/Image.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Card,
    Image1: Image,
    Button,
  },
};
</script>

<style>
</style>
