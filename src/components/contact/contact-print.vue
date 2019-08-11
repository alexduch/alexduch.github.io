<template>
  <div class="row d-none d-print-flex justify-content-between">
    <div id="contact-print" class="col-auto mr-auto" v-if="contact">
      <h1>
        <strong>{{ contact.name }}</strong>
      </h1>
      <span>{{ contact.area }}</span>
      <br />
      <span>{{ contact.mail }}</span>
      <br />
      <span>{{ contact.phone }}</span>
    </div>
    <div id="qrcode" class="col-auto">
      <img src="resources/contact.png" alt="Contact QR code (print only)" class="img-fluid" style="height: 3cm" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['contact'],
})
export default class ContactPrintComponent extends Vue {
  public contact!: any;
}
</script>
