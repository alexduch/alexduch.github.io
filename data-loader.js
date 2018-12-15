const skillStyle = new Map();
skillStyle.set('language', 'warning');
skillStyle.set('framework', 'success');
skillStyle.set('tool', 'info');

const dataRequestConfig = {
  method: 'GET',
  mode: 'same-origin',
  credentials: 'same-origin'
};

Vue.component('skill', {
  props: ['name', 'category', 'skillStyle'],
  template: `<span :class="'m-1 badge badge-pill badge-' + skillStyle.get(category)">{{ name }}</span>`
});

Vue.component('xp', {
  props: ['xp', 'skillStyle'],
  template:
      `<div class="row">
        <div class="col p-1">
          <div class="card">
            <div class="card-header">{{ xp.dates }}</div>
            <div class="card-body">
              <h4 class="card-title">{{ xp.position }}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{{ xp.company }}, {{ xp.location }}</h6>
              <p>{{ xp.context }}</p>
              <ul>
                <li v-for="task in xp.tasks">{{ task }}</li>
              </ul>
              <skill v-for="(category, name) in xp.env" :name="name" :category="category" :skill-style="skillStyle"></skill>
            </div>
          </div>
        </div>
      </div>`
});

Vue.component('training', {
  props: ['dates', 'school', 'training', 'description'],
  template:
      `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-1">
        <div class="card">
          <div class="card-header">{{ dates }}</div>
          <div class="card-body">
            <h4 class="card-title">{{ training }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ school }}</h6>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>`
});

let rootComponent = new Vue({
  el: '#main',
  data: function() {
      return {
          me: {},
          locale: navigator.language === 'fr' ? 'fr' : 'en',
          skillStyle: skillStyle,
          dataRequestConfig: {
            method: 'GET',
            mode: 'same-origin',
            credentials: 'same-origin'
          }
      };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      fetch(new Request(`data/${this.locale}.json`), this.dataRequestConfig)
          .then(response => {
            if (!response.ok) {
              alert(`An error occurred: ${statusText}`);
            } else {
              return response.json();
            }
          })
          .then(data => {
              this.me = data;
          });
    }
  }
});
