import 'leaflet/dist/leaflet.css';
import '@oruga-ui/theme-bulma/style.css';

import { createApp } from 'vue';
import {
  LMap, LTileLayer, LMarker, LGeoJson,
} from '@vue-leaflet/vue-leaflet';
import { Icon } from 'leaflet';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import axios from 'axios';
import BaseApp from './BaseApp.vue';
import router from './router';

const app = createApp(BaseApp);
app.use(router);
app.use(Oruga, bulmaConfig);

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-geo-json', LGeoJson);

type D = Icon.Default & {
  _getIconUrl?: string;
};
delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

app.mount('#app');
