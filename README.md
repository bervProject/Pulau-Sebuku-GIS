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

### Data Gunung atau Bukit di Pulau Sebuku

Lakukan query ke [overpass-turbo.eu](http://overpass-turbo.eu) dengan query sebagai berikut :

```json
[out:json][timeout:25];
// gather results
(
  node["is_in:state"="Kalimantan Selatan"]["natural"="peak"]({{bbox}});
  node["is_in:country"="Indonesia"]["natural"="peak"]({{bbox}});
  
);
out body;
>;
out skel qt;
```

Lalu lakukan export ke format yang diinginkan, misalkan format geoJSON.

Catatan : Data ini akan menampilkan gunung yang di Indonesia begitu juga di Provinsi Kalimantan Selatan. Kueri di Negara Indonesia diperlukan dikarenakan masih terdapat kekurangan jika hanya Provinsi Kalimantan Selatan (hanya ditemukan 1) padahal ada 2.
