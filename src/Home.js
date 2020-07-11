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
      isCoastline: true,
      isLahanKritis: true
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
      axios.get('/assets/sebuku-lahan.geojson')
        .then(response => {
          this.lahanKritis = response.data
        }).catch(err => {
          this.$buefy.notification.open(`Failed to Load Lahan Kritis. With Error: ${err.message}`)
        })
    },
    loadStyle (feature) {
      switch (feature.properties.KRITIS) {
        case 'Agak Kritis': return { color: '#D19A6F' }
        case 'Kritis': return { color: '#FED699' }
        case 'Potensial Kritis': return { color: '#A06332' }
      }
    }
  },
  created () {
    this.loadCoastline()
    this.loadPeak()
    this.loadLahanKritis()
  }
}
