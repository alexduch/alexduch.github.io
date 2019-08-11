<template>
  <section
    id="contact"
    class="col-lg-4 col-md-6 col-sm-12 order-md-2 order-1 d-flex flex-column mt-3 d-print-none"
    v-if="contact"
  >
    <h2>{{ title }}</h2>
    <div class="row d-flex justify-content-around align-items-center text-center p-3">
      <div class="col">
        <h2>
          <a href="resources/duchenne.vcf">
            <i class="fas fa-address-card" aria-hidden="true"></i>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a :href="'mailto:' + contact.mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a target="_blank" href="https://www.linkedin.com/in/alexandreduchenne/">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a target="_blank" href="https://github.com/alexduch">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['title', 'contact'],
})
export default class ContactOnScreenComponent extends Vue {
  public title!: string;
  public contact!: any;
}
</script>
