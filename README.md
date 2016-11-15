# Pulau Sebuku



## Sumber Data Terbuka

### Data Kecamatan Sebuku Tahun 2014

Data Kecamatan Sebuku tahun 2014 diperoleh melalui situs resmi Kabupaten Kota Baru yaitu pada tautan [berikut](http://www.bappeda-kotabaru.info/umum/29/), lalu diambil data paling baru yang tersedia dari tautan tersebut menuju ke laman [berikut](http://www.mediafire.com/download/k89zmocmeamc1xk/KCA2014-PSEBUKU.rar) lalu diekstrak dan disimpan di repositori ini untuk mempermudah pengaksesan data. Data tersebut dapat dilihat [di sini](/Data Kecamatan Sebuku Tahun 2014/).

### Data Coastline Sebuku

Lakukan query ke [overpass-turbo.eu](http://overpass-turbo.eu) dengan query sebagai berikut :

```json
way(29044638);
(._;>;);
out body;
```

Lalu lakukan export ke format yang diinginkan, misalkan format geoJSON.