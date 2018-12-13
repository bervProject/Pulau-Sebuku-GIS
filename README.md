# Pulau Sebuku

This repository forked from https://github.com/BesutKode/uni-task-2-berviantoleo. This repositories will updated with some new features and maybe data.

## How to Deploy

`In Progress`

## How to Contribute

`In Progress`

## Dependencies

* Vue.js
* Leaflet
* Buefy/Bulma

## Code License

MIT

```
MIT License

Copyright (c) 2018 Bervianto Leo Pratama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Open Source Data License

### Data Kecamatan Sebuku Tahun 2014

Data about Kecamatan Sebuku in 2014 can be downloaded from [here](http://www.bappeda-kotabaru.info/umum/29/). In this repository also have data that downloaded from [here](http://www.mediafire.com/download/k89zmocmeamc1xk/KCA2014-PSEBUKU.rar) that already extracted into [here](./Data%20Kecamatan%20Sebuku%20Tahun%202014). Please refer to [this](http://www.bappeda-kotabaru.info/umum/29/) site for newest data.

### Coastline Sebuku

Query to [overpass-turbo.eu](http://overpass-turbo.eu) with this query :

```sql
way(29044638);
(._;>;);
out body;
```

Export data into GeoJSON.

License of Coastline Sebuku Data : [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/).

### Mountain or Hill in Pulau Sebuku

Query into [overpass-turbo.eu](http://overpass-turbo.eu) with this query :

```sql
[out:json][timeout:25];
(
  node["is_in:state"="Kalimantan Selatan"]["natural"="peak"]({{bbox}});
  node["is_in:country"="Indonesia"]["natural"="peak"]({{bbox}});

);
out body;
>;
out skel qt;
```

Export data into GeoJSON.

License of Mountain or Hill in Pulau Sebuku Data: [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/).

Notes:
```
This query will also show mountain or hill in Indonesia because if restrict only Kalimantan Selatan, will show only one result, but in reality we have two mountain in Kalimantan Selatan especially in Pulau Sebuku.
```

### Data Lahan Kritis

This data from Kementrian Kehutanan. Data downloaded from [here](http://appgis.dephut.go.id/appgis/download.aspx).

License of Data Lahan Kritis : [Creative Commons Attribution Lisence (cc-by)](http://www.opendefinition.org/licenses/cc-by) as mentioned in [data.go.id](http://data.go.id/dataset/data-lahan-kritis-di-kalimantan/resource/24281d8c-3472-4c7c-99be-01fcc4666384)

## GIS Creation of Pulau Sebuku

1. Preparing data of Coastline, Mountain Location, and Lahan Kritis, etc (another data will provided in next version).
2. Use this repository to deploy in Github Pages or another site. Please refer to how to deploy.
