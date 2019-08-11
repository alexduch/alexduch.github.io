<template>
  <section id="skills" class="col order-md-1 order-2 mt-3" v-if="skills">
    <h2>{{ title }}</h2>
    <h4 class="p-3">
      <skill v-for="(category, name) in skills" :key="name" :name="name" :category="category"></skill>
    </h4>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SkillComponent from './skill.vue';

@Component({
  props: ['skills', 'title'],
  components: {
    skill: SkillComponent,
  },
})
export default class SkillsComponent extends Vue {
  public title!: string;
  public skills!: string[];
}
</script>
