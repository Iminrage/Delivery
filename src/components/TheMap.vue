<template>
  <iframe class="map" :src="mapSrc"></iframe>
</template>

<script>
export default {
  name: "TheMap",
  props: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  computed: {
    mapSrc: function () {
      /** Pls dont use this API key, its not mine :D */
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyDR7DFQIBGumoziD6B6a0n2EZgrKhQOWS4&q=${this.lat},${this.long}`;
    },
  },
};
</script>

<style lang="css" scoped>
.map {
  width: 768px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
