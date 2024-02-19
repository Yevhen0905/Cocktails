<template>
  <div class="root">
    <div class="img" :style="`background-image: url(${imgUrl})`"></div>
    <div class="main">
      <el-button class="btn_random">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    imgUrl: {
      type: String,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main';

  .root {
    display: flex;
    background: $background;
    min-height: 100vh;
  }

  .img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  .main {
    position: relative;
    width: 50%;
    padding: 32px 40px;
  }

  .btn_random {
    position: absolute;
    top: 32px;
    right: 40px;
    background-color: $accept;
    border-color: $accept;
    color: $text;
    font-size: 16;
    font-family: 'Raleway', 'Arial', sans-serif;

    &:hover,
    &:active {
      background-color: darken($accept, 10%);
      border-color: darken($accept, 10%);
      color: $text;
    }
  }
</style>
