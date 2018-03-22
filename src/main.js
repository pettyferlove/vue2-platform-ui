// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import PettyScroll from 'petty-scroll'
import 'font-awesome/css/font-awesome.css'
import 'simplemde/dist/simplemde.min.css'
import 'animate.css'
import 'petty-scroll/dist/petty-scroll.min.css'
import './my-theme/index.less'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
Vue.use(PettyScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
