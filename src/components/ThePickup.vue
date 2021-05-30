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
      <div
        class="input-wrapper input-wrapper--error input-wrapper--input-group"
      >
        <h4>Номер карты</h4>
        <input id="pick-up-user-card-1-4" type="text" required />
        <label
          for="pick-up-user-card-1-4"
          aria-label="Первые четыре цифр с карты"
        ></label>
        <input id="pick-up-user-card-5-8" type="text" required />
        <label
          for="pick-up-user-card-5-8"
          aria-label="Вторые четыре цифр с карты"
        ></label>
        <input id="pick-up-user-card-9-12" type="text" required />
        <label
          for="pick-up-user-card-9-12"
          aria-label="Третьи четыре цифр с карты"
        ></label>
        <input id="pick-up-user-card-13-16" type="text" required />
        <label
          for="pick-up-user-card-13-16"
          aria-label="Четвёртые четыре цифр с карты"
        ></label>
        <div class="input-wrapper__error">Введите верный номер карты</div>
      </div>
      <div class="input-wrapper input-wrapper--input">
        <h4>Номер телефона</h4>
        <input
          id="pick-up-user-phone"
          type="text"
          placeholder="+7 ("
          required
        />
        <label for="pick-up-user-phone" aria-label="Укажите телефон"></label>
        <div class="input-wrapper__error">Укажите телефон</div>
      </div>
      <span class="form__info"
        >Товар на складе будет привязан к номеру телефона. В пункте выдачи
        назовите номер телефона, чтобы получить ваш заказ.</span
      >
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

export default {
  name: "ThePickup",
  components: {
    RadioGroupTabs,
    TheMap,
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
