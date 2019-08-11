<template>
  <div id="app">
    <contact-print :contact="data.contact" />
    <div class="row">
      <skills :title="data.sections.skills" :skills="data.skills" />
      <contact-screen :title="data.sections.contact" :contact="data.contact" />
    </div>
    <xps :title="data.sections.xp" :xps="data.xp" />
    <education :title="data.sections.education" :education="data.education" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import XpsComponent from './components/xp/xps.vue';
import SkillsComponent from './components/skills/skills.vue';
import ContactOnScreenComponent from './components/contact/contact-screen.vue';
import ContactPrintComponent from './components/contact/contact-print.vue';
import EducationComponent from './components/education/education.vue';

import DataService from './services/data-service';

@Component({
  components: {
    xps: XpsComponent,
    skills: SkillsComponent,
    contactScreen: ContactOnScreenComponent,
    contactPrint: ContactPrintComponent,
    education: EducationComponent,
  },
})
export default class App extends Vue {
  public data: any;

  private dataService: DataService;

  constructor() {
    super();
    this.dataService = new DataService();
    this.data = this.dataService.getData(window.navigator.language);
  }
}
</script>
