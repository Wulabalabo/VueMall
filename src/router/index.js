import Vue from 'vue'
import VueRouter from 'vue-router'
import routesConfig from '../components/config/router'


Vue.use(VueRouter)

const routes = routesConfig;

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
