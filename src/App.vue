<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Pulau Sebuku</h1>
      <div class="columns">
        <div class="column is-four-fifths">
          <l-map ref="myMap" style="height: 500px; width: 100%" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-geo-json :geojson="coastline"></l-geo-json>
            <l-geo-json :geojson="peak"></l-geo-json>
          </l-map>
        </div>
        <div class="column is-one-fifths">
          <h2 class="subtitle">Keterangan Lahan Kritis :</h2>
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
    </div>
  </section>
</template>

<script src="./App.js">
</script>
