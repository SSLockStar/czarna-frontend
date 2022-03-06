<script setup>
// import layout components
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import Messenger from './layout/Messenger.vue';
</script>

<template>
  <Header></Header>
  <div class="content">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<style>
  div.content {
    height: calc(100vh - 5rem);
    overflow: auto;
  }
</style>
