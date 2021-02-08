<template>
  <div>
    <div v-if="$auth.user">
      <button type="button" @click="$auth.logout">Log out</button>
      <App />
    </div>
    <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import App from '../App';
import LoginForm from './LoginForm';

export default {
  props: {
    auth: {
      type: Object,
      required: true,
      validator: (auth) =>
        ['getConnectedUser', 'login', 'logout'].every(
          (method) => method in auth && typeof auth[method] === 'function'
        ),
    },
  },

  data() {
    return {
      errorMessage: '',
    };
  },

  methods: {
    login({ username, lastname, password }) {
      this.$auth.login(username, lastname, password);

      if (!this.$auth.user) {
        this.errorMessage = 'Authentication failed, please try again';
      }
    },

    logout() {
      this.auth.logout();
    },
  },

  created() {
    this.$auth.init();
  },

  components: { App, LoginForm },
};
</script>