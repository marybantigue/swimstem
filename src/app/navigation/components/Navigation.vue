<template>
  <div id="navigation-view">
    <ul class="nav nav-pills nav-stacked">
      <li><router-link :to="{ name: 'setup' }">Setup</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'navigation'
}
</script>

<style scoped lang='scss'>

</style>
