<template>
  <form>
    <input v-model="username" />
    <button type="submit" @click="startGame()">Start</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    startGame() {
      this.$router.push({
        path: `test/${this.username}`,
      });
    },
  },
};
</script>
