import axios from 'axios';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  name: 'HomePage',
})
export default class HomePage extends Vue {
  protected url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

  protected zoom = 11.1;

  protected center: number[] = [-3.5, 116.36667];

  protected coastline: any = null;

  protected peak: any = null;

  protected lahanKritis: any = null;

  protected isPeak = true;

  protected isCoastline = true;

  protected isLahanKritis = true;

  public created() {
    this.loadCoastline();
    this.loadPeak();
    this.loadLahanKritis();
  }

  protected loadCoastline() {
    axios.get('/assets/sebuku-coastline.geojson')
      .then((response) => {
        this.coastline = response.data;
      }).catch((err) => {
        this.$buefy.notification.open(`Failed to Load Coastline. With Error: ${err.message}`);
      });
  }

  protected loadPeak() {
    axios.get('/assets/sebuku-node-peak.geojson')
      .then((response) => {
        this.peak = response.data;
      }).catch((err) => {
        this.$buefy.notification.open(`Failed to Load Node Peak. With Error: ${err.message}`);
      });
  }

  protected loadLahanKritis() {
    axios.get('/assets/sebuku-lahan.geojson')
      .then((response) => {
        this.lahanKritis = response.data;
      }).catch((err) => {
        this.$buefy.notification.open(`Failed to Load Lahan Kritis. With Error: ${err.message}`);
      });
  }

  protected loadStyle(feature: any) {
    switch (feature.properties.KRITIS) {
      case 'Agak Kritis': return { color: '#D19A6F' };
      case 'Kritis': return { color: '#FED699' };
      case 'Potensial Kritis': return { color: '#A06332' };
      default: return { color: '#FFFFFF' };
    }
  }
}
