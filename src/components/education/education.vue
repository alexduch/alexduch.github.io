<template>
  <section id="formation" class="mt-3" v-if="education">
    <h2>{{ title }}</h2>
    <div class="p-3">
      <div class="row">
        <school v-for="s in education" :key="s.dates" :school="s"></school>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SchoolComponent from './school.vue';

@Component({
  props: ['title', 'education'],
  components: {
    school: SchoolComponent,
  },
})
export default class EducationComponent extends Vue {
  public title!: string;
  public education!: any;
}
</script>
