<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import 'bulma/css/bulma.css'
import '@/css/common.css'
import Header from '@/components/header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>
