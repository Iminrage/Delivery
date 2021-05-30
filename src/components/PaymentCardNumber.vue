<template>
  <div>
    <div
      class="input-wrapper input-wrapper--input-group"
      :class="!cardNumberValidate && 'input-wrapper--error'"
    >
      <h4>Номер карты</h4>
      <template v-for="(item, index) in cardInputs">
        <input
          :key="`input-${item.id}`"
          :id="`pick-up-user-card-${item.id}`"
          v-model="item.value"
          @input="catchInput($event.target.value, index)"
          @keydown.backspace="moveFocusBack($event.target.value, index)"
          type="text"
          maxlength="4"
          required
          :ref="`card-input-ref-${index}`"
        />
        <label
          :key="`label-${item.id}`"
          :for="`pick-up-user-card-${item.id}`"
          :aria-label="`${index} четыре цифр с карты`"
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

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      cardInputs: [],
    };
  },

  created() {
    this.cardInputs = this.sliceCardNumber();
  },

  computed: {
    cardNumberValidate() {
      if (this.value.length >= 15) {
        return luhnAlgorithm(this.value);
      }
      return true;
    },

    fullCardNumber() {
      let fullNum = "";
      for (let item of this.cardInputs) {
        fullNum = fullNum + item.value.toString();
      }
      return fullNum;
    },
  },

  methods: {
    sliceCardNumber() {
      const cardNumberFromProps = this.value.length
        ? this.value.match(/.{1,4}/g)
        : new Array(4).fill("");
      return new Array(4).fill(null).map((item, index) => {
        return {
          id: index,
          value: cardNumberFromProps[index] ? cardNumberFromProps[index] : "",
        };
      });
    },

    moveFocusForward(index) {
      if (index < this.cardInputs.length - 1)
        this.$refs[`card-input-ref-${index + 1}`][0].focus();
    },

    moveFocusBack(val, index) {
      if (val.length === 0 && index > 0) {
        this.$refs[`card-input-ref-${index - 1}`][0].focus();
      }
    },

    catchInput(val, index) {
      if (val.length === 4) {
        this.moveFocusForward(index);
      }
    },
  },

  watch: {
    fullCardNumber: function () {
      this.$emit("input", this.fullCardNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
