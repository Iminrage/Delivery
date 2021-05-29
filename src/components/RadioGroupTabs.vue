<template>
  <div class="input-wrapper input-wrapper--radio-group">
    <h4>{{ title }}</h4>
    <template v-for="tab in tabs">
      <input
        :id="tab.id"
        type="radio"
        :name="name"
        :value="tab.value"
        :key="`input-${tab.key}`"
        :checked="tab.value === value"
        @input="$emit('input', tab.value)"
      />
      <label :key="`label-${tab.key}`" :for="tab.id">{{ tab.title }}</label>
    </template>
  </div>
</template>

<script>
import "../assets/css/blocks/input-wrapper.css";

export default {
  name: "RadioGroupTabs",
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Array, Object, Number],
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped></style>
