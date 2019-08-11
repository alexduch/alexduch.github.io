<template>
  <div id="app">
    <main-content :data="dataService.data"></main-content>
    <foot :service="dataService"></foot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MainComponent from './components/content.vue';
import FooterComponent from './components/footer.vue';

import DataService from './services/data-service';

@Component({
  components: {
    mainContent: MainComponent,
    foot: FooterComponent,
  },
})
export default class App extends Vue {
  public dataService = new DataService();
}
</script>

<style type="text/css">
html {
  font-size: 10pt;
}

.card {
  height: 100%;
}

#contact > div {
  flex-grow: 1;
}

@media print {
  #skills {
    font-size: 10pt;
  }
}
</style>
