import 'buefy/dist/buefy.css';
import 'leaflet/dist/leaflet.css';

import Vue from 'vue';
import Buefy from 'buefy';
import {
  LMap, LTileLayer, LMarker, LGeoJson,
} from 'vue2-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

Vue.use(VueRouter);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-geo-json', LGeoJson);

type D = Icon.Default & {
  _getIconUrl?: string;
};
delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(Buefy);

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
