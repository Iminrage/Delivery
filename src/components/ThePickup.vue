<template>
  <section class="form tabs-block__pick-up">
    <h2 class="visually-hidden">Форма самовывоза</h2>
    <form action="#" method="POST">
      <h3>Самовывоз</h3>
      <RadioGroupTabs
        v-model="selectedCity"
        title="Город"
        name="city"
        :tabs="supportedCities"
      />
      <RadioGroupTabs
        title="Адрес пункта выдачи заказов"
        name="pick-point"
        :tabs="pickPoints"
        v-model="selectedPickPoint"
      />
      <TheMap :lat="pickPointLatitude" :long="pickPointLongitude" />
      <PaymentForm @input="handlePaymentFormChange" />
      <div class="form__submit-block">
        <button class="form__submit-btn" type="submit" disabled>
          Заказать
        </button>
        <div class="form__submit-state">
          <p class="form__submit-header">Осталось заполнить:</p>
          <p class="form__submit-help">
            <span>номер карты</span> и <span>телефон</span>
          </p>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import RadioGroupTabs from "./RadioGroupTabs";
import TheMap from "./TheMap";
import PaymentForm from "./PaymentForm";

export default {
  name: "ThePickup",
  components: {
    RadioGroupTabs,
    TheMap,
    PaymentForm,
  },
  props: {
    supportedCities: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCity: "",
      selectedPickPoint: "",
    };
  },
  created: function () {
    this.selectedCity = this.supportedCities[0].id;
    this.selectedPickPoint = this.supportedCities[0].deliveryPoints[0].value;
  },
  computed: {
    pickPoints: function () {
      if (this.supportedCities.length > 0) {
        return this.supportedCities.find(
          (item) => item.value === this.selectedCity
        ).deliveryPoints;
      }
      return [];
    },
    pickPointLatitude: function () {
      return this.selectedPickPoint[0];
    },
    pickPointLongitude: function () {
      return this.selectedPickPoint[1];
    },
  },
  methods: {
    handlePaymentFormChange(paymentData) {
      console.log(paymentData);
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

<style lang="stylus" scoped></style>
