var Vue = require('vue'),
    App;

//components
var b2Bar = require('./components/b2Bar.vue');

//define b2shop manager application
App = Vue.extend({
  components: {
    b2Bar: b2Bar
  }
});

//mount the shop manager application
new App().$mount('#b2pda-app');

