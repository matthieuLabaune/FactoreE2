<template>
  <form @submit.prevent="submit()">
    <p v-if="errorMessage" class="error">{{ this.errorMessage }}</p>
    <input type="name" v-model="name" />
    <input type="firstname" v-model="firstname" />
    <input type="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: '',
    }
  },

  methods: {
    submit() {
      this.$emit('submit', {
        name: this.name,
        firstname: this.firstname,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: tomato;
}
</style>
