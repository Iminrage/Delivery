<template>
  <section class="form tabs-block__item-delivery">
    <h2 class="visually-hidden">Форма доставки курьером</h2>

    <form action="#" method="POST">
      <h3>Доставка</h3>

      <RadioGroupTabs
        @input="changeCity"
        :value="selectedCity"
        title="Город"
        name="city"
        :tabs="supportedCities"
      />
      <div class="input-wrapper input-wrapper--error input-wrapper--input">
        <h4>Адрес</h4>
        <input id="delivery-user-adress" type="text" required />
        <label for="delivery-user-adress" aria-label="Укажите адрес"></label>
        <div class="input-wrapper__error">Укажите адрес</div>
      </div>
      <div class="input-wrapper input-wrapper--success input-wrapper--input">
        <h4>Дата доставки</h4>
        <input id="delivery-user-date-delivery" type="text" required />
        <label
          for="delivery-user-date-delivery"
          aria-label="Укажите дату доставки"
        ></label>
        <div class="input-wrapper__error">Укажите дату доставки</div>
      </div>
      <div class="input-wrapper input-wrapper--range">
        <h4>Время доставки</h4>
        <input
          id="delivery-user-time-delivery"
          type="range"
          class="hidden"
          data-field-type="delivery"
        />
        <label
          for="delivery-user-time-delivery"
          aria-label="Укажите время доставки"
        ></label>
        <div class="range-slider">
          <div class="range-slider-thumb-area js_range-slider-thumb-area">
            <div class="range-slider-thumb js_range-slider-thumb" tabindex="2">
              <div class="range-slider-tooltip">10:00 - 12:00</div>
              <div class="range-slider-thumb__stripe"></div>
              <div class="range-slider-thumb__stripe"></div>
              <div class="range-slider-thumb__stripe"></div>
            </div>
          </div>
          <div class="range-slider-tips">
            <div class="range-slider-tip">10:00</div>
            <div class="range-slider-tip">13:00</div>
            <div class="range-slider-tip">16:00</div>
            <div class="range-slider-tip">19:00</div>
          </div>
        </div>
      </div>

      <PaymentForm
        @changePaymentInfo="changePaymentInfo"
        :paymentInfo="paymentInfo"
      />

      <div class="form__submit-block">
        <button class="form__submit-btn" type="submit">Заказать</button>
        <div class="form__submit-state">
          <p class="form__submit-header">Осталось заполнить:</p>
          <p class="form__submit-help">
            <span>адрес</span> и <span>телефон</span>
          </p>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import RadioGroupTabs from "./RadioGroupTabs";
import PaymentForm from "./PaymentForm";

export default {
  name: "TheDelivery",
  
  components: {
    RadioGroupTabs,
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
    changePaymentInfo(paymentInfo) {
      this.$emit("changePaymentInfo", paymentInfo);
    },

    changeCity(city) {
      this.$emit("changeCity", city)
    }
  },
};
</script>

<style lang="stylus" scoped></style>
