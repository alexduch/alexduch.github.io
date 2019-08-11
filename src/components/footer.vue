<template>
  <footer class="d-print-none">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container d-flex justify-content-end">
        <form class="form-inline">
          <select id="languageSelector" class="custom-select" v-model="service.locale">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </form>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['service'],
})
export default class FooterComponent extends Vue {}
</script>
