import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const router = require('./router-weex');
const App = require('../.nuxt/App');
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

