<template>
  <div class="hello">
    <h1>Data: {{ getVariable }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'StartPage',

  computed: {
      ...mapGetters('Template', [
        'getVariable',
        'getData'
        ])//end mapGetters
    },
  methods: {
    ...mapActions('Template', [
      'getData'
    ])
  },
  created() {
    this.$store.dispatch('GET_DATA');
  } //end created

}//end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
