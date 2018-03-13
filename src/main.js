import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'
import 'normalize.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BaiduMap, {
    ak: 'c7xZOiY52zDHyFyIrhPdVCPmgMCrXuoN'
})

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})