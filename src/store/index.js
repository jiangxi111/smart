import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import app from './modules/userinfo.js';
import getters from './getters.js';
export default new Vuex.Store({
	modules:{
		app
	},
	getters
})
