<template>
  <p>UNDERSTANDDDDDINNGGGG {{ username }}</p>
  <button @click="back()">Back</button>
</template>
<script>
export default {
  name: "Party",
  props: ["username"],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
