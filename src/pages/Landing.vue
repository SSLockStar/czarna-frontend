<template>
  <div id="landing">
    <section class="img-section">
      <span class="text-center">Znajdź dłużnika</span>
      <span
        class="description mb-14 text-center"
      >Walczymy z nierzetelnymi najemcami. Opublikuj dług i ostrzeż innych.</span>
      <div class="search-div grid grid-cols-10 gap-4">
        <CzarnaInput
          placeholder="Imię"
          class="my-1 col-span-10 md:col-span-4 md:col-start-1"
          v-model="firstname"
        />
        <CzarnaInput
          placeholder="nazwisko"
          class="my-1 col-span-10 md:col-span-4 md:col-start-5"
          v-model="surname"  
        />
        <button
          class="czarna-btn-red my-1 text-white px-6 col-span-10 md:col-span-2 md:col-start-9 w-full py-4 flex items-center justify-center rounded-lg"
          @click="filterDebts"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20.575" height="21.033" viewBox="0 0 20.575 21.033" class="mr-2">
            <g id="Iconly_Light_Search" data-name="Iconly/Light/Search" transform="translate(0.75 0.75)">
              <g id="Search">
                <circle id="Ellipse_739" cx="8.989" cy="8.989" r="8.989" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Line_181" d="M0,0,3.524,3.515" transform="translate(15.24 15.707)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              </g>
            </g>
          </svg>
          Szukaj
        </button>
      </div>
    </section>

    <section class="debts-list py-14">
      <div class="czarna-container">
        <div class="title-div flex flex-col items-center justify-center">
          <h3 class="mb-3 text-center">Oferty długów</h3>
          <span class="text-center">Walczymy z nierzetelnymi najemcami. Opublikuj dług i ostrzeż innych.</span>
        </div>
        <div class="list grid grid-cols-12 gap-4 mt-14">
          <div class="col-span-12 col-start-1 lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10 sm:col-start-1 sm:col-span-12">
            <div class="w-full list-header flex justify-between items-center">
              <span class="mb-1">Wszystkich długów (<b>{{totalDebts}}</b>)</span>
              <CzarnaSelect
                placeholder="Sortowanie"
                :items="['Domyślnie', 'cenę', 'Miejscowość']"
                class="mb-1"
                @onSortingChanged = 'sortDebts'
              />
            </div>
            <div class="w-full list-body mt-6" v-if="debtsLoaded">
              <div
                class="w-full debt-item grid grid-cols-8 gap-4 mb-2 border border-gray-200 rounded-lg py-2 px-6 flex items-center hover:cursor-pointer"
                v-for="(item, index) in debtsList"
                :key="index"
                @click="onItemClick"
              >
                <div class="col-span-4 text-base">
                  {{item.debtor.firstname + " " + item.debtor.surname}}
                </div>
                <div class="col-span-2 text-base">
                  {{item.address.city}}
                </div>
                <div class="col-span-2 flex justify-center">
                  <button
                    class="bg-gray-400 text-white py-3 px-5 rounded-lg price-btn text-xs lg:text-base md:text-sm sm:text-xs"
                    @click="addToValueList(item.id)"
                    v-if="valueList.indexOf(item.id) === -1"
                  >
                    Pokaż cenę długu
                  </button>
                  <span v-if="valueList.indexOf(item.id) !== -1" class="text-red-700">{{item.value + " " + item.currency}}</span>
                </div>
              </div>
            </div>
            <div class="w-full mt-6" v-else>
              <div
                class="w-full debt-item grid grid-cols-8 gap-4 mb-2 border border-gray-200 rounded-lg py-2 px-6 flex items-center"
                v-for="(item, index) in pagination.max"
                :key="index"
              >
                <div class="col-span-4 text-base">
                  <Skeletor
                    width="50%"
                    height="20"
                    class="rounded"
                  ></Skeletor>
                </div>
                <div class="col-span-2 text-base">
                  <Skeletor
                    width="50%"
                    height="20"
                    class="rounded"
                  ></Skeletor>
                </div>
                <div class="col-span-2">
                  <Skeletor
                    width="100%"
                    height="40"
                    class="rounded"
                  ></Skeletor>
                </div>
              </div>
            </div>
            <CzarnaPagination
              :page="pagination.page"
              :max="pagination.max"
              :pages="pagination.pages"
              @paginationChanged="onPaginationChanged"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CzarnaInput from "../components/CzarnaInput.vue";
import CzarnaSelect from "../components/CzarnaSelect.vue";
import CzarnaPagination from "../components/CzarnaPagination.vue";

// import Services
import ApiService from '../services/ApiService';

// import Constants
import API_CONSTANT from "../constants/api_constant";
import GLOBAL from '../constants/global';

export default {
  name: "Landing",
  components: { CzarnaInput, CzarnaSelect, CzarnaPagination },
  data() {
    return {
      debtsLoaded: true,
      debtsList: [],
      pagination: {
        page: 1,
        max: 10,
        pages: 0,
      },
      totalDebts: 0,
      firstname: '',
      surname: '',

      valueList: []
    }
  },
  mounted() {
    // Retrieve Debts List when the Landing page is mounted
    this.retrieveDebts();
  },
  methods: {
    /**
     * Reset Value Showable List
     */
    resetValueList() {
      this.valueList = [];
    },
    /**
     * Retrieve Debts List by Pagination
     */
    retrieveDebts: function() {
      this.debtsLoaded = false;
      this.resetValueList();
      ApiService
        .getRequest(GLOBAL.host_url + API_CONSTANT.GET_DEBT + '?deep=true&max=' + this.pagination.max + '&page=' + (this.pagination.page - 1))
        .then(result => {
          this.debtsList = result.data.items;
          this.pagination.pages = Math.floor(result.data.settings.total / result.data.settings.pageLimit) + 1;
          this.totalDebts = result.data.settings.total;
          this.debtsLoaded = true;
        })
    },
    /**
     * Retrieve Debts List by filter
     */
    filterDebts: function() {
      this.debtsLoaded = false;
      this.resetValueList();
      var api_url = GLOBAL.host_url + API_CONSTANT.GET_DEBT + '?deep=true';
      if (this.firstname !== '') {
        api_url += ('&firstname=' + this.firstname);
      }
      if (this.surname !== '') {
        api_url += ('&surname=' + this.surname);
      }
      ApiService
        .getRequest(api_url)
        .then(result => {
          this.debtsList = result.data;
          this.debtsLoaded = true;
          this.totalDebts = this.debtsList.length;
        })
    },
    /**
     * Sort Debts List by given sort order
     */
    sortDebts: function(value) {
      this.debtsLoaded = false;
      this.resetValueList();
      var sortValue = '';
      switch(value) {
        case 'Domyślnie':
          sortValue = 'id';
          break;
        case 'cenę':
          sortValue = 'value';
          break;
        case 'Miejscowość':
          sortValue = 'address.city';
          break;
      }

      ApiService
        .getRequest(GLOBAL.host_url + API_CONSTANT.GET_DEBT + '?deep=true&sortValue=' + sortValue)
        .then(result => {
          this.debtsList = result.data;
          this.debtsLoaded = true;
          this.totalDebts = this.debtsList.length;
        })
    },
    /**
     * Add id to Value Showable List
     */
    addToValueList(id) {
      this.valueList.push(id);
    },
    /**
     * Listen Pagination Change Event
     * @param {Object} value Pagination properties
     */
    onPaginationChanged(value) {
      this.pagination = value;
      this.retrieveDebts();
    },
    onItemClick() {
      this.$router.push('/debt-view');
    }
  }
}
</script>

<style scoped>
section.img-section {
  padding: 6rem 2rem 4rem 2rem;
  background: transparent url("src/assets/img/Group\ 22420@2x.png") 0% 0%
    no-repeat padding-box;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section.img-section > span:nth-child(1) {
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 70px;
  letter-spacing: 0px;
  color: #ffffff;
}

section.img-section span.description {
  font-weight: bold;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: 0px;
  color: #eff3f7;
}

section.img-section div.search-div {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
}

section.debts-list div.title-div h3 {
  font-weight: bold;
  font-size: 2rem;
  font-weight: 2.25rem;
  letter-spacing: 0px;
  color: #14161f;
}

section.debts-list div.title-div span {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0px;
  color: #525f7a;
}

section.debts-list div.list div.list-header > span {
  text-align: left;
  letter-spacing: 0px;
  color: #14161f;
}

section.debts-list div.list div.list-body div.debt-item button.price-btn {
  background: #8A8FA8 0% 0% no-repeat padding-box;
  border-radius: 0.5rem;
}
section.debts-list div.list div.list-body div.debt-item button.price-btn:hover {
  background: #525F7A 0% 0% no-repeat padding-box;
  border-radius: 8px;
}
</style>