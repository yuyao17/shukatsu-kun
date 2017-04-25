<template lang="pug">

.col-md-7
  progress-bar
  textarea(:value="activeCompanyText" @input="editNote($event)" class="form-control")

</template>

<script>
import {mapActions, mapState} from 'vuex'
import ProgressBar from './ProgressBar'

export default {
  name: "editor",
  components: {
    ProgressBar
  },
  computed: mapState({
    activeCompanyText: state => state.activeCompany.text
  }),
  methods: mapActions([
    "editNote"
  ])
}
</script>

<style scoped>
.col-md-7 {
  height:70%;
  min-height:78%;
}

textarea {
  height:100%;
}
</style>
