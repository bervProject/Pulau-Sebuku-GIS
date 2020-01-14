import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 11.1,
      center: [-3.5, 116.36667],
      bounds: null,
      coastline: null,
      peak: null,
      lahanKritis: null,
      isPeak: true,
      isCoastline: true
    }
  },
  methods: {
    loadCoastline () {
      axios.get('/assets/sebuku-coastline.geojson')
        .then(response => {
          this.coastline = response.data
        }).catch(err => {
          this.$buefy.notification.open(`Failed to Load Coastline. With Error: ${err.message}`)
        })
    },
    loadPeak () {
      axios.get('/assets/sebuku-node-peak.geojson')
        .then(response => {
          this.peak = response.data
        }).catch(err => {
          this.$buefy.notification.open(`Failed to Load Node Peak. With Error: ${err.message}`)
        })
    },
    loadLahanKritis () {
      this.lahanKritis = window.omnivore.kml('assets/Kalimantan.kml')
    }
  },
  created () {
    this.loadCoastline()
    this.loadPeak()
    // this.loadLahanKritis()
  }
}
