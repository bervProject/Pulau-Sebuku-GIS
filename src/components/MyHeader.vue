<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        Pulau Sebuku GIS
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>

        <router-link to="/data" class="navbar-item">
          Data
        </router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <o-button
              tag="a"
              icon-left="github"
              icon-pack="fab"
              href="https://github.com/bervProject/Pulau-Sebuku-GIS">Github</o-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
