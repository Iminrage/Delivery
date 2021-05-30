<template>
  <section class="form tabs-block__pick-up">
    <h2 class="visually-hidden">Форма самовывоза</h2>

    <form action="#" method="POST">
      <h3>Самовывоз</h3>

      <RadioGroupTabs
        @input="changeCity"
        :value="selectedCity"
        title="Город"
        name="city"
        :tabs="supportedCities"
      />

      <RadioGroupTabs
        title="Адрес пункта выдачи заказов"
        name="pick-point"
        :tabs="pickPoints"
        :value="selectedPickPoint"
        @input="changePickPoint"
      />

      <TheMap :lat="pickPointLatitude" :long="pickPointLongitude" />

      <PaymentForm
        @changePaymentInfo="changePaymentInfo"
        :paymentInfo="paymentInfo"
      />

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

    selectedCity: {
      type: String,
      required: true,
    },

    selectedPickPoint: {
      tyep: Array,
      required: true,
    },

    paymentInfo: {
      type: Object,
      default() {
        return {
          cardNumber: "",
          telNumber: "",
        };
      },
    },
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
    changePaymentInfo(paymentInfo) {
      this.$emit("changePaymentInfo", paymentInfo);
    },

    changeCity(city) {
      this.$emit("changeCity", city);
    },
    
    changePickPoint(pickPoint) {
      this.$emit("changePickPoint", pickPoint);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
