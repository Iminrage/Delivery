<template>
  <div>
    <h3>Способ оплаты</h3>
    <div
      class="input-wrapper input-wrapper--radio-group input-wrapper--payment-method"
    >
      <input
        id="pick-up-card"
        type="radio"
        name="payment-method"
        value="card"
        checked
      />
      <label for="pick-up-card">Карта</label>
      <input
        id="pick-up-cash"
        type="radio"
        name="payment-method"
        value="cash"
      />
      <label for="pick-up-cash">Наличные курьеру</label>
    </div>

    <PaymentCardNumber
      @input="handleCardNumber"
      :value="paymentInfo.cardNumber"
    />

    <div class="input-wrapper input-wrapper--input">
      <h4>Номер телефона</h4>
      <input id="pick-up-user-phone" type="text" placeholder="+7 (" required />
      <label for="pick-up-user-phone" aria-label="Укажите телефон"></label>
      <div class="input-wrapper__error">Укажите телефон</div>
    </div>
    <span class="form__info"
      >Товар на складе будет привязан к номеру телефона. В пункте выдачи
      назовите номер телефона, чтобы получить ваш заказ.</span
    >
  </div>
</template>

<script>
import PaymentCardNumber from "./PaymentCardNumber";

export default {
  name: "PaymentForm",

  components: {
    PaymentCardNumber,
  },

  props: {
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

  methods: {
    handleCardNumber(data) {
      this.$emit("changePaymentInfo", {
        ...this.paymentInfo,
        cardNumber: data,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
