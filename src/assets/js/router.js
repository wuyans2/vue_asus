import VueRouter from 'vue-router'

import index from '../../components/index/index.vue'
import classify from '../../components/index/classify.vue'
import shopcar from '../../components/index/shopcar.vue'
import my from '../../components/index/my.vue'
import first from '../../components/index/first.vue'
import list from '../../components/others/list.vue'
import detail from '../../components/details/detail.vue'
import login from '../../components/login/login.vue'
import register from '../../components/login/register.vue'
import store from '../../components/others/store.vue'
import newcomputer from '../../components/others/newcomputer.vue'
import error1 from '../../components/others/error.vue'
import service from '../../components/others/service.vue'
import news from '../../components/others/news.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:first,
			redirect:'/index',
			children:[
				{
					path:'/index',
					component:index
				},
				{
					path:'/classify',
					component:classify
				},
				{
					path:'/shopcar',
					component:shopcar
				},
				{
					path:'/my',
					component:my
				}
				,
				{
					path:'/list',
					component:list
				}
			]
		},
		{
			path:'/detail',
			component:detail
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/store',
			component:store
		},
		{
			path:'/newcomputer',
			component:newcomputer
		},
		{
			path:'/error',
			component:error1
		},
		{
			path:'/service',
			component:service
		},
		{
			path:'/news',
			component:news
		}
	]
})
