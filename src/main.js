import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import _ from 'lodash';

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '_', { value: _ });


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
