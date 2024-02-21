<template>
  <AppLayout
    imgUrl="https://i.gstatvb.com/84d78de326bc79aeeb86e4956db997d31708520741.rng.webp"
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
          <img class="img" src="https://i.gstatvb.com/5376de7c6c4d28408db52dadc6a1ecb31708520804.rng.png" alt="img" />
        </div>
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailSelect v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
  import {storeToRefs} from 'pinia';
  import {useRootStore} from '@/stores';
  import AppLayout from '../components/AppLayout.vue';
  import CocktailSelect from '../components/CocktailSelect.vue';

  const rootStore = useRootStore();
  rootStore.getIngredients();

  const {ingredients, ingredient, cocktails} = storeToRefs(rootStore);

  const getCocktails = () => rootStore.getCocktails(rootStore.ingredient);

  const removeIngredient = () => rootStore.setIngredient(null);
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
    width: 100%;
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
    gap: 8px;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #69696a #343440;
  }
</style>
