<template>
  <div id="app">
    <div class="page-header"></div>
    <div class="wrapper">
      <main class="page-main">
        <h1 class="visually-hidden">Заказ доставки в интернет-магазине</h1>
        <div class="tabs-block">
          <h2>Выберите способ получения товара</h2>
          <Tabs :activeTab="activeTab" @input="setActiveTab"/>
          <div class="tabs-block__content">
            <section v-if="activeTab===0" class="form tabs-block__pick-up">
              <h2 class="visually-hidden">Форма самовывоза</h2>
              <form action="#" method="POST">
                <h3>Самовывоз</h3>
                <div class="input-wrapper input-wrapper--radio-group">
                  <h4>Город</h4>
                  <input
                    id="pick-up-led"
                    type="radio"
                    name="city"
                    value="lED"
                    checked
                  />
                  <label for="pick-up-led">Санкт-Петербург</label>
                  <input
                    id="pick-up-mow"
                    type="radio"
                    name="city"
                    value="mow"
                  />
                  <label for="pick-up-mow">Москва</label>
                  <input
                    id="pick-up-goj"
                    type="radio"
                    name="city"
                    value="goj"
                  />
                  <label for="pick-up-goj">Нижний Новгород</label>
                  <input
                    id="pick-up-krr"
                    type="radio"
                    name="city"
                    value="krr"
                  />
                  <label for="pick-up-krr">Краснодар</label>
                </div>
                <div class="input-wrapper input-wrapper--radio-group">
                  <h4>Адрес пункта выдачи заказов</h4>
                  <input
                    id="pick-up-led-address-1"
                    type="radio"
                    name="led-address"
                    value="Ленина, 10"
                    checked
                  />
                  <label for="pick-up-led-address-1">Ленина, 10</label>
                  <input
                    id="pick-up-led-address-2"
                    type="radio"
                    name="led-address"
                    value="Сталина, 20"
                  />
                  <label for="pick-up-led-address-2">Сталина, 20</label>
                  <input
                    id="pick-up-led-address-3"
                    type="radio"
                    name="led-address"
                    value="Хрущёва, 30"
                  />
                  <label for="pick-up-led-address-3">Хрущёва, 30</label>
                  <input
                    id="pick-up-led-address-4"
                    type="radio"
                    name="led-address"
                    value="Брежнева, 40"
                  />
                  <label for="pick-up-led-address-4">Брежнева, 40</label>
                  <input
                    id="pick-up-led-address-5"
                    type="radio"
                    name="led-address"
                    value="Андропова, 50"
                  />
                  <label for="pick-up-led-address-5">Андропова, 50</label>
                </div>
                <div class="map"></div>
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
                  <div class="input-wrapper__error">
                    Введите верный номер карты
                  </div>
                </div>
                <div class="input-wrapper input-wrapper--input">
                  <h4>Номер телефона</h4>
                  <input
                    id="pick-up-user-phone"
                    type="text"
                    placeholder="+7 ("
                    required
                  />
                  <label
                    for="pick-up-user-phone"
                    aria-label="Укажите телефон"
                  ></label>
                  <div class="input-wrapper__error">Укажите телефон</div>
                </div>
                <span class="form__info"
                  >Товар на складе будет привязан к номеру телефона. В пункте
                  выдачи назовите номер телефона, чтобы получить ваш
                  заказ.</span
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
            <section v-if="activeTab===1" class="form tabs-block__item-delivery">
              <h2 class="visually-hidden">Форма самовывоза</h2>
              <form action="#" method="POST">
                <h3>Доставка</h3>
                <div class="input-wrapper input-wrapper--radio-group">
                  <h4>Город</h4>
                  <input
                    id="delivery-led"
                    type="radio"
                    name="city"
                    value="lED"
                    checked
                  />
                  <label for="delivery-led">Санкт-Петербург</label>
                  <input
                    id="delivery-mow"
                    type="radio"
                    name="city"
                    value="mow"
                  />
                  <label for="delivery-mow">Москва</label>
                  <input
                    id="delivery-goj"
                    type="radio"
                    name="city"
                    value="goj"
                  />
                  <label for="delivery-goj">Нижний Новгород</label>
                  <input
                    id="delivery-krr"
                    type="radio"
                    name="city"
                    value="krr"
                  />
                  <label for="delivery-krr">Краснодар</label>
                </div>
                <div
                  class="input-wrapper input-wrapper--error input-wrapper--input"
                >
                  <h4>Адрес</h4>
                  <input id="delivery-user-adress" type="text" required />
                  <label
                    for="delivery-user-adress"
                    aria-label="Укажите адрес"
                  ></label>
                  <div class="input-wrapper__error">Укажите адрес</div>
                </div>
                <div
                  class="input-wrapper input-wrapper--success input-wrapper--input"
                >
                  <h4>Дата доставки</h4>
                  <input
                    id="delivery-user-date-delivery"
                    type="text"
                    required
                  />
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
                    <div
                      class="range-slider-thumb-area js_range-slider-thumb-area"
                    >
                      <div
                        class="range-slider-thumb js_range-slider-thumb"
                        tabindex="2"
                      >
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
                <div
                  class="input-wrapper input-wrapper--hidden input-wrapper--input-group"
                >
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
                  <div class="input-wrapper__error">
                    Введите верный номер карты
                  </div>
                </div>
                <div class="input-wrapper input-wrapper--input">
                  <h4>Номер телефона</h4>
                  <input
                    id="delivery-user-phone"
                    type="text"
                    placeholder="+7 ("
                    required
                  />
                  <label
                    for="delivery-user-phone"
                    aria-label="Укажите телефон"
                  ></label>
                  <div class="input-wrapper__error">Укажите телефон</div>
                </div>
                <span class="form__info"
                  >Курьер позвонит на указанный номер за час до доставки
                  заказа.</span
                >
                <div class="form__submit-block">
                  <button class="form__submit-btn" type="submit">
                    Заказать
                  </button>
                  <div class="form__submit-state">
                    <p class="form__submit-header">Осталось заполнить:</p>
                    <p class="form__submit-help">
                      <span>адрес</span> и <span>телефон</span>
                    </p>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import "./assets/css/style.css";
import Tabs from "./components/Tabs";

export default {
  name: "App",
  components: {
    Tabs,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style>
</style>
