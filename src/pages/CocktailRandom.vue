<template>
  <div if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktailRandom.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktailRandom.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <Swiper class="swiper" :slides-per-view="3" :space-between="10">
              <SwiperSlide v-for="(item, key) in ingredients" :key="key">
                <img :src="`${INGREDIENTS_PICTURE}${item}-Small.png`" alt="" />
                <div class="name_ingredient">{{ item }}</div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="instruction">
            {{ cocktailRandom.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import {ref, computed} from 'vue';
  import {COCKTAIL_RANDOM, INGREDIENTS_PICTURE} from '@/constants';
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import AppLayout from '../components/AppLayout.vue';

  const cocktailRandom = ref('');

  const ingredients = computed(() => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (!cocktailRandom.value[`strIngredient${i}`]) break;

      const ingredient = cocktailRandom.value[`strIngredient${i}`];
      ingredients.push(ingredient);
    }

    return ingredients;
  });

  const getCocktail = async () => {
    try {
      const data = await axios.get(COCKTAIL_RANDOM);
      cocktailRandom.value = data?.data?.drinks[0];
    } catch (e) {
      console.log(e);
    }
  };

  getCocktail();
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main.scss';

  .slider {
    margin: 50px 0;
  }

  .swiper {
    max-width: 586px;
    width: 100%;
    color: $text;
    padding-bottom: 10px;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #69696a #343440;

    @media only screen and (max-width: 1200px) {
      max-width: 450px;
    }

    @media only screen and (max-width: 960px) {
      max-width: 380px;
    }

    @media only screen and (max-width: 820px) {
      max-width: 480px;
    }

    @media only screen and (max-width: 520px) {
      max-width: 350px;
    }
  }
  .name_ingredient {
    margin-top: 10px;
    color: $textDark;
  }
</style>
