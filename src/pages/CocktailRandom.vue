<template>
  <div if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper class="swiper" :slides-per-view="3" :space-between="50">
              <swiper-slide v-for="(item, key) in ingredients" :key="key">
                <img :src="`${INGREDIENTS_PICTURE}${item}-Small.png`" alt="" />
                <div class="name_ingredient">{{ item }}</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instruction">
            {{ cocktail.strInstructions }}
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

  const cocktail = ref(null);

  const ingredients = computed(() => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (!cocktail.value[`strIngredient${i}`]) break;

      const ingredient = cocktail.value[`strIngredient${i}`];

      ingredients.push(ingredient);
    }

    return ingredients;
  });

  async function getCocktail() {
    const data = await axios.get(COCKTAIL_RANDOM);
    cocktail.value = data?.data?.drinks[0];
  }

  getCocktail();
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main.scss';

  .slider {
    margin: 50px 0;
  }

  .swiper {
    width: 586px;
    color: $text;
  }
  .name_ingredient {
    margin-top: 10px;
    color: $textDark;
  }
</style>
