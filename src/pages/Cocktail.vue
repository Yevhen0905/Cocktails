<template>
  <div if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div v-for="(item, key) in ingredients" :key="key" class="list_item">
              {{ item.name }}
              <template v-if="item.measure"> | {{ item.measure }}</template>
            </div>
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
  import {useRoute} from 'vue-router';
  import {COCKTAIL_BY_ID} from '@/constants';
  import AppLayout from '../components/AppLayout.vue';

  const route = useRoute();

  const cocktail = ref('');
  const cocktailId = computed(() => route.path.split('/').pop());

  const ingredients = computed(() => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (!cocktail.value[`strIngredient${i}`]) break;

      const ingredient = {};
      ingredient.name = cocktail.value[`strIngredient${i}`];
      ingredient.measure = cocktail.value[`strMeasure${i}`];

      ingredients.push(ingredient);
    }

    return ingredients;
  });

  const getCocktail = async () => {
    try {
      const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
      cocktail.value = data?.data?.drinks[0];
    } catch (e) {
      console.log(e);
    }
  };

  getCocktail();
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main.scss';
</style>
