<template>
  <div class="tabs-block">
    <template v-for="(item, index) in waysOfDelivery">
      <input :key="`input-${item.key}`"
        :id="item.id"
        type="radio"
        name="tab"
        @input="$emit('input', index)"
        :value="index"
        :checked="index === 0"
      />
      <label :key="`label-${item.key}`" :for="item.id">
        <span>{{ item.title }}</span>
        <inline-svg
          :src="require(`../assets/img/icon/${item.img.name}`)"
        ></inline-svg>
      </label>
    </template>
  </div>
</template>

<script>
import "../assets/css/style.css";

const waysOfDelivery = [
  {
    key: 1,
    id: "tab-pick-up",
    title: "Самовывоз",
    img: {
      name: "icon-pick-up.svg",
      alt: "Самовывоз",
    },
  },
  {
    key: 2,
    id: "tab-delivery",
    title: "Доставка курьером",
    img: {
      name: "icon-delivery.svg",
      alt: "Доставка курьером",
    },
  },
];

export default {
  name: "TheWayOfDelivery",
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      waysOfDelivery,
    };
  },
};
</script>

