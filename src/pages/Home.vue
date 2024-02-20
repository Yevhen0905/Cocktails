<template>
  <AppLayout
    imgUrl="/src/assets/img/cocktail1.webp"
    :back-page="removeIngredient"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select_wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
            @change="getCocktails"
            filterable
            allow-create
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through
          our cocktail generator.
        </div>
        <div class="img_wrapper">
          <img class="img" src="../assets/img/kokteil-krasivie-foto.png" alt="img" />
        </div>
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailChoice v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
  import {ref} from 'vue';
  import {storeToRefs} from 'pinia';
  import {useRootStore} from '@/stores/root';
  import AppLayout from '../components/AppLayout.vue';
  import CocktailChoice from '../components/CocktailChoice.vue';

  const rootStore = useRootStore();
  rootStore.getIngredients();

  const {ingredients, ingredient, cocktails} = storeToRefs(rootStore);

  function getCocktails() {
    rootStore.getCocktails(rootStore.ingredient);
  }

  function removeIngredient() {
    rootStore.setIngredient(null);
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/main.scss';

  .select_wrapper {
    padding-top: 50px;
  }
  .select {
    width: 220px;
  }
  .text {
    max-width: 516px;
    margin: 60px auto 0;
    line-height: 36px;
    letter-spacing: 0.1em;
    color: $textDark;
  }

  .img_wrapper {
    max-width: 345px;
    width: 100%;
    margin: 60px auto 0;

    img {
      width: 100%;
    }
  }

  .cocktails {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 60px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
