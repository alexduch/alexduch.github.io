<template>
  <div class="row">
    <div class="col p-1">
      <div class="card">
        <div class="card-header">{{ xp.dates }}</div>
        <div class="card-body">
          <h4 class="card-title">{{ xp.position }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ xp.company }}, {{ xp.location }}</h6>
          <p>{{ xp.context }}</p>
          <ul>
            <li v-for="task in xp.tasks" :key="task">{{ task }}</li>
          </ul>
          <p v-if="xp.note">{{ xp.note }}</p>
          <skill v-for="(category, name) in xp.env" :key="name" :name="name" :category="category"></skill>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Xp from './xp';
import SkillComponent from '../skills/skill.vue';

@Component({
  props: ['xp'],
  name: 'xp',
  components: {
    skill: SkillComponent,
  },
})
export default class XpComponent extends Vue {
  public xp!: Xp;
}
</script>
