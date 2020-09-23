import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import './style/main.less'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

new Vue({
	render: h => h(App)
}).$mount('#app')