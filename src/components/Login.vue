<template>
  <div class="login">
    <b-form class="input" @submit="onSubmit" @reset="onReset" v-if="visibility">
      <b-form-group
        id="input-group-1"
        label=" Votre Pseudo:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nickname"
          type="text"
          required
          placeholder="Entrez votre Pseudo"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Votre Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Entrez votre Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import API from '../provider/requestsHandler';

export default {
  data() {
    return {
      name: '',
      firstname: '',
      password: '',
    };
  },
  methods: {
    login: function() {
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
