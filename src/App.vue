<template>
  <div>
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Pulau Sebuku GIS
        </a>

          <a role="button" class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/data">Data</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
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
