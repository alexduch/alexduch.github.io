<template>
  <section id="experience" class="mt-3" v-if="xps">
    <h2>{{ title }}</h2>
    <div class="p-3">
      <xp v-for="x in xps" :key="x.dates" :xp="x" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Xp from './xp';
import XpComponent from './xp.vue';

@Component({
  props: ['xps', 'title'],
  name: 'xps',
  components: {
    xp: XpComponent,
  },
})
export default class XpsComponent extends Vue {
  public title!: string;
  public xps!: Xp[];
}
</script>
