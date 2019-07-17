<template>
  <div>
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item subtitle" href="/">
          Pulau Sebuku GIS
        </a>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-four-fifths">
            <l-map ref="myMap" style="height: 500px; width: 100%; z-index: 0" :zoom="zoom" :center="center">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-geo-json v-if="isCoastline" :geojson="coastline"></l-geo-json>
              <l-geo-json v-if="isPeak" :geojson="peak"></l-geo-json>
            </l-map>
          </div>
          <div class="column is-one-fifths">
            <div class="card">
              <div class="card-content">
                <h3 class="subtitle">Keterangan Lahan Kritis :</h3>
                <table class="table is-bordered">
                  <thead>
                    <tr>
                      <th>Warna</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tr>
                    <td style="background-color:#A06332"></td>
                    <td>Tidak Kritis</td>
                  </tr>
                  <tr>
                    <td style="background-color:#D19A6F"></td>
                    <td>Agak Kritis</td>
                  </tr>
                  <tr>
                    <td style="background-color:#FED699"></td>
                    <td>Kritis</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h2 class="subtitle">Options</h2>
                <div class="field">
                  <b-checkbox v-model="isCoastline">
                    Coastline
                  </b-checkbox>
                </div>
                <div class="field">
                  <b-checkbox v-model="isPeak">
                    Peak
                  </b-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Pulau Sebuku GIS</strong> by <a href="https://berviantoleo.github.io">Bervianto Leo Pratama</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script src="./App.js">
</script>
