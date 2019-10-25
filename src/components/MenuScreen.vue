<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Campaigns</h2>
    <button @click="testme($event)" > click me </button>
<div id="dropdown">
  <select class="form-control" @change="selectOption($event)">
    <option value="" selected disabled>Choose</option>
    <option v-for="dateRange in dateRanges" :value="dateRange.id" :key="dateRange.id">{{ dateRange.name }}</option>
  </select>
  <br><br>
  <p><span>Selected job title: {{ selectedJobTitle  }}</span></p>
</div>

    <h2>Conversions</h2>
    {{campaigns}}
  </div>
</template>

<script>
export default {
  name: 'MenuScreen',
  data () {
    return {
      msg: 'Boucher Conversion Reporting',
      dateRanges: [
      { name: "One Day", id: 1 },
      { name: "One Week", id: 2 },
      { name: "One Month", id: 3 },
      { name: "One Year", id: 4 }
    ],
    selectedJobTitle: null,
    conversions: [],
     campaigns: [
        { 
          name: "campaign one",
          medium: "facebook",
          data: [
            {
              ad: "ad1",
              google_stats: {
                date: "october",
                pageviews: "12000",
                conversions: "72"
              }
            }
          ]//end data
        }
      ],//end campaigns
    }//end return
  },//end data
  methods: {
    testme(e) {
      alert("ladsjflj");
    },
    selectOption(e) {
      this.selectedJobTitle = e.target.options[e.target.options.selectedIndex].text
    }
  }//end methods
}//end exptr
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
