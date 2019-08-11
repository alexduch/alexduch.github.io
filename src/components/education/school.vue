<template>
  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-1">
    <div class="card">
      <div class="card-header">{{ school.dates }}</div>
      <div class="card-body">
        <h4 class="card-title">{{ school.training }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{ school.school }}</h6>
        <p>{{ school.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['school'],
})
export default class SchoolComponent extends Vue {
  public school!: any;
}
</script>
