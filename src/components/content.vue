<template>
  <main class="container">
    <contact-print :contact="data.contact" />
    <div class="row">
      <skills :title="data.sections.skills" :skills="data.skills" />
      <contact-screen :title="data.sections.contact" :contact="data.contact" />
    </div>
    <xps :title="data.sections.xp" :xps="data.xp" />
    <education :title="data.sections.education" :education="data.education" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import XpsComponent from './xp/xps.vue';
import SkillsComponent from './skills/skills.vue';
import ContactOnScreenComponent from './contact/contact-screen.vue';
import ContactPrintComponent from './contact/contact-print.vue';
import EducationComponent from './education/education.vue';

import DataService from '../services/data-service';

@Component({
  props: ['data'],
  components: {
    xps: XpsComponent,
    skills: SkillsComponent,
    contactScreen: ContactOnScreenComponent,
    contactPrint: ContactPrintComponent,
    education: EducationComponent,
  },
})
export default class MainComponent extends Vue {}
</script>
