<template>
  <div class="root">
    <div class="img" :style="`background-image: url(${imgUrl})`"></div>
    <div class="main">
      <div class="btn_wrapper">
        <el-button v-if="isBackButtonVisible" class="back" type="primary" :icon="Back" circle @click="goBack" />
        <el-button class="btn_random" @click="goForCocktailRandom">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import {computed} from 'vue';
  import {ROUTER_PATH} from '@/constants';
  import {useRoute, useRouter} from 'vue-router';
  import {Back} from '@element-plus/icons-vue';

  const props = defineProps({
    imgUrl: {
      type: String,
      required: true
    },
    backPage: {
      type: Function
    },
    isBackButtonVisible: {
      type: Boolean,
      default: true
    }
  });

  const route = useRoute();
  const router = useRouter();

  const routeName = computed(() => route.name);

  const goForCocktailRandom = () => {
    if (routeName.value === ROUTER_PATH.COCKTAIL_RANDOM) {
      router.go(0);
    }

    router.push(ROUTER_PATH.COCKTAIL_RANDOM);
  };

  const goBack = () => (props.backPage ? props.backPage() : router.go(-1));
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main';

  .root {
    display: flex;
    background: $background;
    min-height: 100vh;

    @media only screen and (max-width: 820px) {
      flex-direction: column;
    }
  }

  .img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    @media only screen and (max-width: 820px) {
      width: 100%;
      min-height: 75vh;
    }
  }

  .main {
    position: relative;
    width: 50%;
    padding: 32px 40px;

    @media only screen and (max-width: 1150px) {
      padding: 22px;
    }

    @media only screen and (max-width: 820px) {
      width: 100%;
    }
  }

  .btn_random {
    position: relative;
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

  .btn_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back {
    background-color: transparent;
    border-color: $text;

    &:hover {
      border-color: $accept;
    }
  }
</style>
