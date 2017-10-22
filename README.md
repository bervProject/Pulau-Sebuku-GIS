# Pulau Sebuku

## Sumber Data Terbuka

### Data Kecamatan Sebuku Tahun 2014

Data Kecamatan Sebuku tahun 2014 diperoleh melalui situs resmi Kabupaten Kota Baru yaitu pada tautan [berikut](http://www.bappeda-kotabaru.info/umum/29/), lalu diambil data paling baru yang tersedia dari tautan tersebut menuju ke laman [berikut](http://www.mediafire.com/download/k89zmocmeamc1xk/KCA2014-PSEBUKU.rar) lalu diekstrak dan disimpan di repositori ini untuk mempermudah pengaksesan data. Data tersebut dapat dilihat [di sini](./Data%20Kecamatan%20Sebuku%20Tahun%202014).

### Data Coastline Sebuku

Lakukan query ke [overpass-turbo.eu](http://overpass-turbo.eu) dengan query sebagai berikut :

```json
way(29044638);
(._;>;);
out body;
```

Lalu lakukan export ke format yang diinginkan, misalkan format geoJSON.

Lisensi dari data ini adalah [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/).

### Data Gunung atau Bukit di Pulau Sebuku

Lakukan query ke [overpass-turbo.eu](http://overpass-turbo.eu) dengan query sebagai berikut :

```
[out:json][timeout:25];
(
  node["is_in:state"="Kalimantan Selatan"]["natural"="peak"]({{bbox}});
  node["is_in:country"="Indonesia"]["natural"="peak"]({{bbox}});
  
);
out body;
>;
out skel qt;
```

Lalu lakukan export ke format yang diinginkan, misalkan format geoJSON.

Lisensi dari data ini adalah [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/).

Catatan : Data ini akan menampilkan gunung yang di Indonesia begitu juga di Provinsi Kalimantan Selatan. Kueri di Negara Indonesia diperlukan dikarenakan masih terdapat kekurangan jika hanya Provinsi Kalimantan Selatan (hanya ditemukan 1) padahal ada 2.

### Data Lahan Kritis

Data ini diambil dari Kementrian Kehutanan. Data didapatkan melalui tautan [berikut](http://appgis.dephut.go.id/appgis/download.aspx).

Lisensi dari data ini adalah [Creative Commons Attribution Lisence (cc-by)](http://www.opendefinition.org/licenses/cc-by) seperti disebutkan pada [data.go.id](http://data.go.id/dataset/data-lahan-kritis-di-kalimantan/resource/24281d8c-3472-4c7c-99be-01fcc4666384)

## Pembuatan Peta

1. Mempersiapkan setiap berkas seperti, batas pantai, lokasi gunung, dan lahan kritis.
2. Menggunakan open layer untuk merender beberapa data tersebut. Anda dapat menggunakan kode index.html yang sudah ada untuk percobaan.
3. Deploy ke github pages atau server lainnya. Bisa dicoba dilokal juga.
