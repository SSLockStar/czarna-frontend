<template>
  <div id="add-debt">
    <div class="czarna-container">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-12 lg:col-start-4 lg:col-span-6">
          <div class="top-section grid grid-cols-12 gap-x-4 gap-y-6 mb-12">
            <h1 class="col-span-12 text-center sm:text-left">Dodaj dług</h1>
            <span class="col-span-12 sm:col-span-8 mb-3 text-center sm:text-left">
              Przewodnik pomocy w obsłudze naszego systemu oraz najczęściej zadawane pytania
            </span>
            <CzarnaInput
              class="col-start-1 col-span-12 sm:col-span-6"
              placeholder="Imię"
              v-model="debt_data.debtor.firstname"
              :hasError="error.firstname"
            />
            <CzarnaInput
              class="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6"
              placeholder="Nazwisko"
              v-model="debt_data.debtor.surname"
              :hasError="error.surname"
            />
            <CzarnaInput
              class="col-start-1 col-span-12 sm:col-span-6"
              placeholder="PESEL"
              v-model="debt_data.debtor.pesel"
            />
            <CzarnaMaskedInput
              class="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6"
              placeholder="Data urodzenia"
              mask="99-99-9999"
              v-model="debt_data.debtor.birthdate"
              :hasError="error.birthdate"
            />
          </div>
          <div class="separator"></div>
          <div class="address-section grid grid-cols-12 gap-x-4 gap-y-6 mb-12">
            <h2 class="col-span-12 mb-2 text-center sm:text-left">Adres powstania długu</h2>
            <CzarnaInput
              class="col-start-1 col-span-12"
              placeholder="Ulica"
              v-model="debt_data.address.street"
            />
            <CzarnaMaskedInput
              class="col-start-1 col-span-12 sm:col-span-4"
              placeholder="Kod pocztowy"
              mask="99-999"
              v-model="debt_data.address.postcode"
              :hasError="error.postcode"
            />
            <CzarnaInput
              class="col-start-1 col-span-12 sm:col-start-5 sm:col-span-8"
              placeholder="Miasto"
              v-model="debt_data.address.city"
              :hasError="error.city"
            />
          </div>
          <div class="separator"></div>
          <div class="value-section grid grid-cols-12 gap-x-4 gap-y-6 mb-12">
            <h2 class="col-span-12 mb-2 text-center sm:text-left">Wartość długu</h2>
            <CzarnaInput
              class="col-start-1 col-span-12"
              placeholder="Kwota długu"
              v-model="debt_data.value"
              :hasError="error.value"
            />
            <label class="col-span-12 flex items-center text-sm sm:text-base">
              <input type="checkbox" class="checkbox rounded-sm border-red-500 checked:bg-red-500 checked:hover:bg-red-500 checked:focus:bg-red-500 checked:focus:ring-red-500 focus:ring-red-500 mr-2" v-model="debt_data.isStillGrowing" />
              Zaznacz jeżeli dłużnik wciąż przebywa w miejscu powstania długu.
            </label>
            <div class="col-span-12 flex items-center justify-center sm:justify-start">
              <h3 class="mr-2">Kwota sprzedaży długu</h3>
              <CzarnaTooltip text="Lorem ipsum dolor" position="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <g id="Info_Square" data-name="Info Square" transform="translate(0.75 0.75)">
                    <path id="Stroke_1" data-name="Stroke 1" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Stroke_3" data-name="Stroke 3" d="M.5,4V0" transform="translate(8.745 9.25)" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Stroke_2" data-name="Stroke 2" d="M.5.5H.5" transform="translate(8.745 4.954)" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </g>
                </svg>
              </CzarnaTooltip>
            </div>
            <div class="col-start-1 col-span-12 md:col-span-8 flex items-center">
              <CzarnaRangeInput
                :min="50"
                :max="100"
                v-model="debt_data.minimumSellPercentage"
              />
            </div>
            <div class="col-start-1 col-span-12 md:col-start-9 md:col-span-4 flex items-center">
              <span class="value">{{debt_sale_amount}}PLN</span>
            </div>
          </div>
          <div
            class="email-section grid grid-cols-12 gap-x-4 gap-y-6 mb-3"
            v-if="!isAuthorized"
          >
            <h2 class="col-span-12">E-mail sprzedającego</h2>
            <CzarnaInput
              class="col-start-1 col-span-12"
              placeholder="Twój adres e-mail"
              v-model="debt_data.reporter.disposableEmail"
              :hasError="error.email"
            />
          </div>
          <div class="submit-section grid grid-cols-12 gap-x-4 gap-y-6">
            <div class="col-start-1 col-span-12 block sm:flex sm:justify-between">
              <label class="flex items-center text-sm sm:text-base mb-4">
                <input
                  type="checkbox"
                  class="checkbox rounded-sm border-red-500 checked:bg-red-500 checked:hover:bg-red-500 checked:focus:bg-red-500 checked:focus:ring-red-500 focus:ring-red-500 mr-2"
                  v-model="agree"
                />
                Akceptuje warunki&nbsp;<a href="#">regulaminu</a>
              </label>
              <button
                class="text-white font-semibold py-3 px-12 border rounded-lg hover:ease-in action-btn lg:text-base md:text-sm sm:text-sm text-xs flex items-center justify-center czarna-btn-red w-full sm:w-auto text-center sm:text-left disabled:bg-red-400"
                @click="onSaveDebt()"
                :disabled="!agree"
              >
                Sprzedaj dług
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import custom components
import CzarnaInput from "../components/CzarnaInput.vue";
import CzarnaMaskedInput from "../components/CzarnaMaskedInput.vue";
import CzarnaTooltip from "../components/CzarnaTooltip.vue";
import CzarnaRangeInput from "../components/CzarnaRangeInput.vue";

// import tailwindcss components
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

// import Helper
import CommonHelper from '../Helper/Common';

// import Services
import ApiService from '../services/ApiService';
import AuthService from "../services/AuthService";

// import Constants
import API_CONSTANT from "../constants/api_constant";
import GLOBAL from '../constants/global';

export default {
  name: "AddDebt",
  components: {
    CzarnaInput,
    CzarnaMaskedInput,
    Popover,
    PopoverButton,
    PopoverPanel,
    CzarnaTooltip,
    CzarnaRangeInput
  },
  computed: {
    isAuthorized: {
      get() {
        return AuthService.isAuthorized();
      }
    },
    debt_sale_amount: {
      get() {
        var temp = this.debt_data.value;
        temp = temp.replace(",", ".");
        const value = ((temp === '' ? 0 : temp) / 100 * this.debt_data.minimumSellPercentage).toFixed(2).toString();
        const lang = document.documentElement.lang;
        if (lang === 'pl') {
          return value.replace(".", ",");
        }
        return value;
      }
    }
  },
  data() {
    return {
      popoverOpen: true,
      debt_data: {
        debtor: {
          firstname: '',
          surname: '',
          pesel: '',
          birthdate: '',
        },
        address: {
          street: '',
          postcode: '',
          city: '',
        },
        isStillGrowing: false,
        value: '',
        minimumSellPercentage: 100,
        reporter: { disposableEmail: '' }
      },
      agree: false,
      error: {},
    }
  },
  methods: {
    /**
     * If data is valid, then call axios.
     */
    onSaveDebt() {
      if (this.isValid()) {
        const { debtor, address, isStillGrowing, value, minimumSellPercentage, reporter } = this.debt_data;
        if (CommonHelper.isEmptyMaskedInput(debtor.birthdate)) {
          debtor.birthdate = '';
        }

        if (CommonHelper.isEmptyMaskedInput(address.postcode)) {
          address.postcode = '';
        }
        const payload = {
          debt: {
            value,
            address,
            isStillGrowing,
            minimumSellPercentage,
            debtor: Object.assign({}, debtor, {
              birthdate: !CommonHelper.isEmpty(debtor.birthdate)  ? {
                day: debtor.birthdate.split('-')[0],
                month: debtor.birthdate.split('-')[1],
                year: debtor.birthdate.split('-')[2],
              } : {
                day: '',
                month: '',
                year: ''
              }
            })
          }
        }

        if (!this.isAuthorized) payload.debt.reporter = reporter;

        ApiService
          .postRequest(
            GLOBAL.host_url + 
            (
              this.isAuthorized ?
              API_CONSTANT.CREATE_AUTHORIZED_DEBT :
              API_CONSTANT.CREATE_DEBT
            ),
            payload
          )
          .then(() => {
            this.$router.push('/debt-view');
          })
      }
    },
    /**
     * Return Valid or not depending on the given data
     */
    isValid() {
      // Format Error Object
      this.error = {};

      // Validate Each Required Fields
      const { debtor, address, value, reporter } = this.debt_data;
      if (CommonHelper.isEmpty(debtor.firstname)) {
        this.error['firstname'] = true;
      }

      if (CommonHelper.isEmpty(debtor.surname)) {
        this.error['surname'] = true;
      }

      if (CommonHelper.isEmpty(address.city)) {
        this.error['city'] = true;
      }

      if (CommonHelper.isEmpty(value)) {
        this.error['value'] = true;
      }
      if (
        !this.isAuthorized &&
        (CommonHelper.isEmpty(reporter.disposableEmail) || !CommonHelper.isEmail(reporter.disposableEmail))
      ) {
        this.error['email'] = true;
      }

      // Validate the masked input fields
      if (!CommonHelper.isValidMaskedInput(debtor.birthdate) || !CommonHelper.isValidDate(debtor.birthdate)) {
        this.error['birthdate'] = true;
      }

      if(!CommonHelper.isValidMaskedInput(address.postcode)) {
        this.error['postcode'] = true;
      }
      
      // Validate Total
      if (Object.keys(this.error).length === 0) {
        return true;
      }

      return false;
    }
  }
}
</script>

<style scoped>
  div#add-debt {
    padding-top: 3.5rem;
    padding-bottom: 11.25rem;
  }

  div#add-debt div.top-section h1 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    font-weight: bold;
    margin-bottom: 13px;
  }

  div#add-debt div.top-section span {
    display: block;
  }

  div.separator {
    width: 100%;
    border: 1px solid #C4C7D4;
    margin: 2rem 0;
  }

  div.address-section h2,
  div.value-section h2,
  div.email-section h2 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  div.value-section h3 {
    font-weight: bold;
    font-size: 1.125rem;
    font-weight: 2.25rem;
  }

  .czarna-popover {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 28px #525F7A29;
    padding: 12px 22px;
  }

  div.value-section span.value {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.25rem;
    color: #14161F;
  }

  div.submit-section a {
    color: #CC2D42;
    text-decoration: underline;
  }
</style>