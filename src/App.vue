<template>
  <div id="app">
    <div class="page-header"></div>
    <div class="wrapper">
      <main class="page-main">
        <h1 class="visually-hidden">Заказ доставки в интернет-магазине</h1>
        <div class="tabs-block">
          <h2>Выберите способ получения товара</h2>
          <TheWayOfDelivery v-model="deliveryWay" />
          <div class="tabs-block__content">
            <section
              v-if="deliveryWay === 'pickUp'"
              class="form tabs-block__pick-up"
            >
              <h2 class="visually-hidden">Форма самовывоза</h2>
              <TheFormPickup></TheFormPickup>
            </section>
            <section
              v-if="deliveryWay === 'delivery'"
              class="form tabs-block__item-delivery"
            >
              <h2 class="visually-hidden">Форма доставки курьером</h2>
              <TheFormDelivery></TheFormDelivery>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import "./assets/css/style.css";
import TheWayOfDelivery from "./components/TheWayOfDelivery";
import TheFormPickup from "./components/TheFormPickup";
import TheFormDelivery from "./components/TheFormDelivery";

export default {
  name: "App",
  components: {
    TheWayOfDelivery,
    TheFormPickup,
    TheFormDelivery,
  },
  data() {
    return {
      deliveryWay: "pickUp",
    };
  },
};
</script>

<style>
</style>
