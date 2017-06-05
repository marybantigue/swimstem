<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <img src="../assets/logo.png">
        <navigation></navigation>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation } from './navigation/components'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
</style>
