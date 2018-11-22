import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BaiduMap, {
	ak: 'c7xZOiY52zDHyFyIrhPdVCPmgMCrXuoN'
})

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

new Vue({
	render: h => h(App)
}).$mount('#app')