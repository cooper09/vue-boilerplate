<template>
  <div class="hello">
    <h1>MultiLine Data: {{ getMultiline }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Multiline',

computed: {
    ...mapGetters('Multiline', [
      'getMultiline'
      ])//end mapGetters
  },
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
