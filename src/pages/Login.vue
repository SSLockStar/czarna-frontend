<template>
  <div id="login" class="pt-24 pb-32 px-4">
    <div class="box mx-auto bg-white rounded-lg pt-12 pb-16 px-10">
      <h3 class="mb-6">Zaloguj się</h3>
      <CzarnaInput
        class="mb-6"
        placeholder="E-mail"
        v-model="user_data.email"
        :hasError="error.email"
      />
      <CzarnaInput
        class="mb-6"
        placeholder="Hasło"
        type="password"
        v-model="user_data.password"
        :hasError="error.password"
      />
      <label class="flex items-center text-sm sm:text-base mb-6 remember-me">
        <input type="checkbox" class="checkbox rounded-sm border-red-500 checked:bg-red-500 checked:hover:bg-red-500 checked:focus:bg-red-500 checked:focus:ring-red-500 focus:ring-red-500 mr-2" v-model="rememberPassword" />
        Zapamiętaj mnie
      </label>
      <button
        class="text-white font-semibold py-3 px-12 border rounded-lg hover:ease-in action-btn lg:text-base md:text-sm sm:text-sm text-xs flex items-center justify-center czarna-btn-red w-full text-center sm:text-left disabled:bg-red-400"
        @click="onLogin()"
        :disabled="isInvalid"
      >
        Zaloguj się
      </button>
      <div class="flex justify-between flex-wrap">
        <span class="register-user">Nie masz konta? Zarejestruj się <a @click="$router.push('/register')">tutaj</a></span>
        <a class="forgot-password" @click="$router.push('/pass-reminder')">Zapomniałeś hasła?</a>
      </div>
    </div>
  </div>
</template>

<script>
import CzarnaInput from "../components/CzarnaInput.vue";

// import Helper
import CommonHelper from '../Helper/Common';

// import Service
import ApiService from "../services/ApiService";
import AuthService from "../services/AuthService";

// import Constant
import GLOBAL from "../constants/global";
import API_CONSTANT from '../constants/api_constant';
import AlertService from '../services/AlertService';

export default {
  name: "Login",
  components: { CzarnaInput },
  data() {
    return {
      user_data: {
        email: '',
        password: ''
      },
      rememberPassword: true,
      isInvalid: false,
      error: {}
    }
  },
  methods: {
    onLogin: function() {
      // Validate
      if (CommonHelper.isEmpty(this.user_data.email) || !CommonHelper.isEmail(this.user_data.email)) {
        this.error['email'] = true;
      }

      if (CommonHelper.isEmpty(this.user_data.password)) {
        this.error['password'] = true;
      }

      // Validate Total
      if (Object.keys(this.error).length !== 0) return;

      const payload = {
        username: this.user_data.email,
        password: this.user_data.password
      };

      ApiService
        .postRequest(GLOBAL.host_url + API_CONSTANT.LOGIN, payload)
        .then(res => {
          AuthService.setAccessToken(res.data.access_token);
          // TODO: Navigate to List my debts Page
          this.$router.push('/');
        })
        .catch(err => {
          AlertService.showToast({
            method: this.$swal,
            type: 'error',
            title: 'Operation failed',
            text: err.message
          })
        })
    }
  }
}
</script>

<style scoped>
  div#login {
    background: transparent url(src/assets/img/Group\ 22420@2x.png) 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
  }

  div#login div.box {
    max-width: 512px;
    width: 100%;
  }

  div#login div.box h3 {
    font-size: 1.5rem;
    font-weight: 620;
    line-height: 1.75rem;
  }

  div#login label.remember-me {
    font-size: 12px;
    line-height: 15px;
    color: #14161F;
  }

  div#login div.box span.register-user,
  div#login div.box a.forgot-password {
    font-size: 14px;
    line-height: 36px;
    color: #525F7A;
  }

  div#login div.box a {
    text-decoration: underline;
    color: #CC2D42;
  }

  div#login div.box a:hover {
    cursor: pointer;
  }
</style>