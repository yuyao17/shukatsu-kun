<template lang="pug">
.container-fluid
  #app
    .row
      sidebar
      company-list
      editor(v-if='company_names_num')
</template>

<script>

import CompanyList from './CompanyList'
import Editor from './Editor'
import Sidebar from './Sidebar'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    Sidebar,
    CompanyList,
    Editor
  },
  computed: mapGetters([
    'company_names_num'
  ])
  // mounted() {
  //   this.$store.dispatch('fetchCompanies')
  // }
}

</script>

<style>
html, body, .row, #app, .container-fluid {
  height:100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}


</style>
