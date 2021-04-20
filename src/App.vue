<template>
  <div id="app">
    
      <v-card flex
              raised
              max-width = "680px"
              min-width = "450px"
              class = "text-center mx-auto p-5">
        <h1>Drum Machine Online</h1>
        <router-view></router-view>
        <v-footer class="p-3"><p class="footer">&copy; 2021 <router-link to="/author">Bassie</router-link> | v0.5</p></v-footer>
      </v-card>
   
  </div>
</template>

<script>

</script>

<style>
#app {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer{
  width: 100%;
  text-align: center;
}
</style>
