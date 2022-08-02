<template>
  <div
    class="flex flex-col items-center justify-between text-3xl font-bold h-48"
  >
    <input
      class="border border-black rounded-lg text-center"
      v-model="username"
    />
    <button
      class="text-white bg-green-400 rounded-xl w-40"
      type="submit"
      @click="startGame()"
    >
      Start
    </button>
  </div>
</template>
<script>
export default {
  name: "Game",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    startGame() {
      this.$router.push({
        name: "Party",
        params: {
          username: this.username,
        },
      });
    },
  },
};
</script>
