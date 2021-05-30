<template>
  <div id="app">
    <div class="page-header"></div>
    <div class="wrapper">
      <main class="page-main">
        <h1 class="visually-hidden">Заказ доставки в интернет-магазине</h1>
        <div class="tabs-block">
          <h2>Выберите способ получения товара</h2>
          <TheWayOfDelivery v-model="deliveryWay" />
          <div v-if="supportedCities.length > 0" class="tabs-block__content">
            <component
              :is="renderWayOfDelivery"
              :supportedCities="supportedCities"
              :selectedCity="selectedCity"
              :selectedPickPoint="selectedPickPoint"
              :paymentInfo="paymentInfo"
              @changePaymentInfo="changePaymentInfo"
              @changePickPoint="changePickPoint"
              @changeCity="changeCity"
            />
          </div>
          <div class="loading" v-else>Loading...</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheWayOfDelivery from "./components/TheWayOfDelivery";
import ThePickup from "./components/ThePickup";
import TheDelivery from "./components/TheDelivery";

import { getPickUpPoints } from "./utils/pickUpPoints.js";

import "./assets/css/style.css";

export default {
  name: "App",
  components: {
    TheWayOfDelivery,
    ThePickup,
    TheDelivery,
  },
  data() {
    return {
      deliveryWay: "pickUp",
      supportedCities: [],
      selectedCity: "",
      selectedPickPoint: "",
      paymentInfo: {
        cardNumber: "",
        telNumber: "",
      },
    };
  },
  mounted: async function () {
    const response = await getPickUpPoints();
    this.supportedCities = response.cities.map((item) => {
      return {
        key: item.id,
        id: item["city-id"],
        title: item.city,
        value: item["city-id"],
        deliveryPoints: item["delivery-points"].map((point) => {
          return {
            key: point.address,
            id: point.address,
            title: point.address,
            value: point.coordinates,
          };
        }),
      };
    });
    this.selectedCity = response.cities[0]["city-id"];
    this.selectedPickPoint =
      response.cities[0]["delivery-points"][0].coordinates;
  },
  computed: {
    renderWayOfDelivery: function () {
      return this.deliveryWay === "pickUp" ? "ThePickup" : "TheDelivery";
    },
  },
  methods: {
    changePaymentInfo(info) {
      this.paymentInfo = info;
    },

    changeCity(city) {
      this.selectedCity = city;
    },

    changePickPoint(pickPoint) {
      this.selectedPickPoint = pickPoint;
    },
  },
  watch: {
    selectedCity: function () {
      this.selectedPickPoint = this.supportedCities.find(
        (item) => item.value === this.selectedCity
      ).deliveryPoints[0].value;
    },
  },
};
</script>

<style scoped lang="css">
.loading {
  margin: 0 auto;
  padding: 100px 0;
}
</style>
