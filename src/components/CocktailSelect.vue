<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div class="picture" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    cocktail: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped lang="scss">
  @import '../assets/styles/main';

  .root {
    max-width: 120px;
    width: 100%;
    .picture {
      width: 120px;
      height: 120px;
      margin: 0 auto 10px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100%;
    }
    .name {
      color: $text;
      letter-spacing: 0.1em;
      font-size: 14px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
