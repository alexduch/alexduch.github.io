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
          <a href="assets/duchenne.vcf">
            <fa icon="address-card"></fa>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a :href="'mailto:' + contact.mail">
            <fa icon="envelope"></fa>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a target="_blank" href="https://www.linkedin.com/in/alexandreduchenne/">
            <fa :icon="['fab', 'linkedin']"></fa>
          </a>
        </h2>
      </div>
      <div class="col">
        <h2>
          <a target="_blank" href="https://github.com/alexduch">
            <fa :icon="['fab', 'github']"></fa>
          </a>
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faAddressCard, faEnvelope, faLinkedin, faGithub);

@Component({
  props: ['title', 'contact'],
  components: {
    fa: FontAwesomeIcon,
  },
})
export default class ContactOnScreenComponent extends Vue {
  public title!: string;
  public contact!: any;
}
</script>
