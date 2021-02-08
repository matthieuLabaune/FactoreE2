<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>Nom</label>
      <input required v-model="firstname" type="text" placeholder="Nom" />
      <label>Prénom</label>
      <input required v-model="name" type="text" placeholder="Prénom" />
      <hr />
      <label>Mot de passe</label>
      <input
        required
        v-model="password"
        type="text"
        placeholder="Mot de passe"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      firstname: '',
      password: '',
    };
  },
  methods: {
    login: function () {
      let name = this.name;
      let firstname = this.firstname;
      let password = this.password;
      this.$store
        .dispatch('login', { name, firstname, password })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
    },
  },
};
</script>