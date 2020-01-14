<template>
  <b-navbar fixed-top shadow type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Pulau Sebuku GIS</b-navbar-item>
    </template>
    <template slot="start">
        <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
        <b-navbar-item tag="router-link" to="/data">Data</b-navbar-item>
    </template>
  </b-navbar>
</template>
