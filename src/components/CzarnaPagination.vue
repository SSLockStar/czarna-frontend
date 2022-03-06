<template>
  <div class="czarna-pagination flex justify-between items-center flex-wrap">
    <div class="czarna-pagination-page-setting mb-1">
      <span>POKAZUJ NA STRONIE:</span>
      <button
        class="pagination-item"
        :class="{'selected': numPerPage === 10}"
        @click="updateNumPerPage(10)"
      >
        10
      </button>
      <button
        class="pagination-item"
        :class="{'selected': numPerPage === 20}"
        @click="updateNumPerPage(20)"
      >
        20
      </button>
      <button
        class="pagination-item"
        :class="{'selected': numPerPage === 30}"
        @click="updateNumPerPage(30)"
      >
        30
      </button>
      <button
        class="pagination-item"
        :class="{'selected': numPerPage === 40}"
        @click="updateNumPerPage(40)"
      >
        40
      </button>
    </div>
    <v-pagination
      v-model="currentPage"
      :pages="totalPages"
      :range-size="2"
      active-color="#ffffff"
      @update:modelValue="updateHandler"
      class="mb-1 ml-auto"
    />
  </div>  
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: { VPagination },
  props: ['page', 'max', 'pages'],
  data() {
    return {
      currentPage: 1,
      numPerPage: 10,
      totalPages: 20,
    }
  },
  watch: {
    page: function(newVal) {
      this.currentPage = newVal;
    },
    max: function(newVal) {
      this.numPerPage = newVal;
    },
    pages: function(newVal) {
      this.totalPages = newVal;
    }
  },
  methods: {
    updateHandler(value) {
      this.currentPage = value;
      this.$emit('paginationChanged', { page: this.currentPage, max: this.numPerPage });
    },
    updateNumPerPage(value) {
      this.numPerPage = value;
      this.$emit('paginationChanged', { page: this.currentPage, max: this.numPerPage });
    }
  }
}
</script>

<style scoped>
  .Page-active {
    color: #E7334B;
    border-radius: 6px;
  }
  .pagination-item {
    height: 22px;
    width: 22px;
    font-size: 14px;
    line-height: 14px;
    margin-left: 0.25rem;
    color: #8A8FA8;
  }
  .selected {
    border: 1px solid #C4C7D4;
    border-radius: 6px;
    color: #E7334B;
  }

  .ml-auto {
    margin-left: auto !important;
  }

</style>