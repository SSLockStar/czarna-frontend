import { createApp } from 'vue'
import App from './App.vue'
import './global.css';

// import router
import router from './router';

// import font awesome dependencies
import 'vue-skeletor/dist/vue-skeletor.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

// import Skeletor
import { Skeletor } from 'vue-skeletor';

// import vue-inputmask
import { mask } from '@ionited/mask-vue';
import VueSweetAlert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(router);
app.use(VueSweetAlert);
app.directive('mask', mask);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component(Skeletor.name, Skeletor);
app.mount('#app')
