<template>
  <label class="relative block border border-gray-200 rounded-lg czarna-select">
    <button
      type="button"
      class="relative w-full bg-white rounded-md pr-10 py-3 text-left cursor-default sm:text-sm border-none focus:ring-0 peer"
      @click="openDropdown()"
    >
      <span class="flex items-center px-1">
        <span class="ml-3 block truncate h-18">{{selected}}</span>
      </span>
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16.121" height="8.811" viewBox="0 0 16.121 8.811">
          <g id="Iconly_Light_Arrow_-_Down_2" data-name="Iconly/Light/Arrow - Down 2" transform="translate(1.061 1.061)">
            <g id="Arrow_-_Down_2" data-name="Arrow - Down 2">
              <path id="Stroke_1" data-name="Stroke 1" d="M14,0,7,7,0,0" fill="none" stroke="#14161f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </g>
          </g>
        </svg>
      </span>
    </button>
    <span
      class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs -translate-y-1/2 peer-focus:top-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm bg-white px-1"
      :class="{'top-0': selected !== '', 'top-1/2': selected === ''}"
    >{{placeholder_text}}</span>
    <div class="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg" v-if="dropdownVisible">
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        <li
          id="listbox-item-0"
          role="option"
          class="cursor-default select-none relative py-2 pl-3 pr-9"
          v-for="(option, index) in options"
          :key="index"
          @click="optionSelected(option)"
        >
          <div class="flex items-center">
            <span
              class="ml-3 block font-normal truncate"
              :class="{'text-czarna-red': selected === option}"
            >{{option}}</span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-4" v-if="selected === option">
            <font-awesome-icon :icon="{prefix: 'fas', iconName: 'check'}" color="#CC2D42"/>
          </span>
        </li>
      </ul>
    </div>
  </label>
</template>

<script>
export default {
  name: 'CzarnaSelect',
  props: ['placeholder', 'items'],
  data() {
    return {
      dropdownVisible: false,
      placeholder_text: this.placeholder,
      selected: '',
      options: this.items
    }
  },
  methods: {
    openDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    optionSelected(option) {
      this.selected = option;
      this.$emit('onSortingChanged', option);
    }
  }
}
</script>

<style scoped>
  .czarna-select {
    min-width: 200px;
  }

  .h-18 {
    height: 18px;
  }

  
  .text-czarna-red {
    color: #CC2D42;
  }

  ul li {
    letter-spacing: 0px;
    color: #14161F;
  }

  ul li:hover {
    background: #EFF3F7 0% 0% no-repeat padding-box;
    cursor: pointer;
  }
</style>