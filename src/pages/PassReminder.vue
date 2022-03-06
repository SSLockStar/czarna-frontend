<template>
  <div id="pass-reminder" class="pt-24 pb-32 px-4">
    <div class="box mx-auto bg-white rounded-lg pt-12 pb-12 px-10">
      <h3 class="mb-2">Przypomnij hasło</h3>
      <span class="block mb-6 description">
        Aby przypomnieć hasło wpisz adres e-mail na który zakładałeś konto. Jeżeli jest w naszej bazie dostaniesz maila z linkiem resetującym hasło.
      </span>
      <CzarnaInput
        class="mb-6"
        placeholder="E-mail"
        v-model="user_data.email"
        :hasError="error.email"
      />
      <button
        class="text-white font-semibold py-3 px-12 border rounded-lg hover:ease-in action-btn lg:text-base md:text-sm sm:text-sm text-xs flex items-center justify-center czarna-btn-red w-full text-center sm:text-left disabled:bg-red-400"
        @click="onSubmit()"
        :disabled="isInvalid"
      >
        Przypomnij hasło
      </button>
      <span class="register-user">Pamiętasz hasło? Zaloguj się <a @click="$router.push('/login')">tutaj</a>.</span>
    </div>
  </div>
</template>

<script>
import CzarnaInput from "../components/CzarnaInput.vue";

// import Helper
import CommonHelper from '../Helper/Common';

// import Service
import ApiService from "../services/ApiService";
import AlertService from '../services/AlertService';

// import Constant
import GLOBAL from "../constants/global";
import API_CONSTANT from '../constants/api_constant';

export default {
  name: "Login",
  components: { CzarnaInput },
  data() {
    return {
      user_data: {
        email: '',
      },
      rememberPassword: true,
      isInvalid: false,
      error: {}
    }
  },
  methods: {
    onSubmit: function() {
      this.error = {};
      // Validate
      if (CommonHelper.isEmpty(this.user_data.email) || !CommonHelper.isEmail(this.user_data.email)) {
        this.error['email'] = true;
      }

      // Validate Total
      if (Object.keys(this.error).length !== 0) return;

      const payload = {
        user: {
          username: this.user_data.email
        }
      };

      ApiService
        .postRequest(GLOBAL.host_url + API_CONSTANT.PASS_REMINDER, payload)
        .then(() => {
          AlertService.showToast({
            method: this.$swal,
            type: 'success',
            title: 'Operation success',
          })
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
  div#pass-reminder {
    background: transparent url(src/assets/img/Group\ 22420@2x.png) 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
  }

  div#pass-reminder div.box {
    max-width: 512px;
    width: 100%;
  }

  div#pass-reminder div.box h3 {
    font-size: 1.5rem;
    font-weight: 620;
    line-height: 1.75rem;
  }

  div#pass-reminder div.box span.description {
    color: #525F7A;
    font-size: 14px;
    line-height: 21px;
  }

  div#pass-reminder div.box span.register-user {
    font-size: 14px;
    line-height: 36px;
    color: #525F7A;
  }

  div#pass-reminder div.box a {
    text-decoration: underline;
    color: #CC2D42;
  }

  div#pass-reminder div.box a:hover {
    cursor: pointer;
  }
</style>