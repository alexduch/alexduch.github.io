<template>
  <span :class="'m-1 badge badge-pill badge-' + skillStyle.get(category)">{{ name }}</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'skill',
  props: ['name', 'category'],
})
export default class SkillComponent extends Vue {
  public name!: string;
  public category!: string;

  public skillStyle = new Map<string, string>();

  constructor() {
    super();
    this.skillStyle.set('language', 'warning');
    this.skillStyle.set('framework', 'success');
    this.skillStyle.set('tool', 'info');
  }
}
</script>
