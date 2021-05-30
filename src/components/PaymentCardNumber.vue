<template>
  <div>
    <div
      class="input-wrapper input-wrapper--input-group"
      :class="!cardNumberValidate && 'input-wrapper--error'"
    >
      <h4>Номер карты</h4>
      <template v-for="item in cardForm">
        <input
          :ref="item.ref"
          :key="`input-${item.id}`"
          :id="`pick-up-user-card-${item.id}`"
          v-model="item.value"
          @input="catchInput($event.target.value, item.next)"
          @keydown.backspace="catchBackSpace($event.target.value, item.prev)"
          type="text"
          maxlength="4"
          required
        />
        <label
          :key="`label-${item.id}`"
          :for="`pick-up-user-card-${item.id}`"
          :aria-label="`${item.labelOrder} четыре цифр с карты`"
        ></label>
      </template>
      <div class="input-wrapper__error">Введите верный номер карты</div>
    </div>
  </div>
</template>

<script>
import { luhnAlgorithm } from "../utils/luhnAlgorithm";

export default {
  name: "PaymentCardNumber",
  data() {
    return {
      cardForm: [
        {
          id: 1,
          value: "",
          ref: "firstCardInput",
          prev: null,
          next: "secondCardInput",
          labelOrder: "Первые",
        },
        {
          id: 2,
          value: "",
          ref: "secondCardInput",
          prev: "firstCardInput",
          next: "thirdCardInput",
          labelOrder: "Вторые",
        },
        {
          id: 3,
          value: "",
          ref: "thirdCardInput",
          prev: "secondCardInput",
          next: "fourthCardInput",
          labelOrder: "Третьи",
        },
        {
          id: 4,
          value: "",
          ref: "fourthCardInput",
          prev: "thirdCardInput",
          next: null,
          labelOrder: "Четвертые",
        },
      ],
    };
  },
  computed: {
    cardNumber() {
      let number = "";
      for (let item of this.cardForm) {
        number = number + item.value.toString();
      }
      return number;
    },
    cardNumberValidate() {
      if (this.cardNumber.length >= 15) {
        return luhnAlgorithm(this.cardNumber);
      }
      return true
    },
  },
  methods: {
    catchInput(val, next) {
      if (val.length === 4 && next) {
        this.$refs[next][0].focus();
      }
    },
    catchBackSpace(val, prev) {
      if (val.length === 0 && prev) {
        this.$refs[prev][0].focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
