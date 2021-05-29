<template>
  <form action="#" method="POST">
    <h3>Доставка</h3>
    <RadioGroupTabs
      title="Город"
      name="city"
      :tabs="supportedCities.cities"
      @input="changeActiveCity"
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
    <h3>Способ оплаты</h3>
    <div
      class="input-wrapper input-wrapper--radio-group input-wrapper--payment-method"
    >
      <input
        id="delivery-card"
        type="radio"
        name="payment-method"
        value="card"
      />
      <label for="delivery-card">Карта</label>
      <input
        id="delivery-cash"
        type="radio"
        name="payment-method"
        value="cash"
        checked
      />
      <label for="delivery-cash">Наличные курьеру</label>
    </div>
    <div class="input-wrapper input-wrapper--hidden input-wrapper--input-group">
      <h4>Номер карты</h4>
      <input id="delivery-user-card-1-4" type="text" required />
      <label
        for="delivery-user-card-1-4"
        aria-label="Первые четыре цифр с карты"
      ></label>
      <input id="delivery-user-card-5-8" type="text" required />
      <label
        for="delivery-user-card-5-8"
        aria-label="Вторые четыре цифр с карты"
      ></label>
      <input id="delivery-user-card-9-12" type="text" required />
      <label
        for="delivery-user-card-9-12"
        aria-label="Третьи четыре цифр с карты"
      ></label>
      <input id="delivery-user-card-13-16" type="text" required />
      <label
        for="delivery-user-card-13-16"
        aria-label="Четвёртые четыре цифр с карты"
      ></label>
      <div class="input-wrapper__error">Введите верный номер карты</div>
    </div>
    <div class="input-wrapper input-wrapper--input">
      <h4>Номер телефона</h4>
      <input id="delivery-user-phone" type="text" placeholder="+7 (" required />
      <label for="delivery-user-phone" aria-label="Укажите телефон"></label>
      <div class="input-wrapper__error">Укажите телефон</div>
    </div>
    <span class="form__info"
      >Курьер позвонит на указанный номер за час до доставки заказа.</span
    >
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
</template>

<script>
import RadioGroupTabs from "./RadioGroupTabs";


export default {
  name: "TheFormDelivery",
  components: {
    RadioGroupTabs,
  },
  data() {
    return {
      supportedCities: {
      },
    };
  },
};
</script>

<style lang="stylus" scoped></style>
