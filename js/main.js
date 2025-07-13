const store = new Vuex.Store({
    state: {
      titulo: ''
    },
    mutations: {

    }
})


const Inicio = { template: '<web-inicio></web-inicio>' }
const Web_registro = { template: '<web-registro></web-registro>' }
const Web_regEst = { template: '<web-regEst></web-regEst>' }
const Web_regDoc = { template: '<web-regDoc></web-regDoc>' }

const routes = [
  { path: '/', component: Inicio },
  { path: '/web-registro', component: Web_registro },
  { path: '/web-regEst', component: Web_regEst },
  { path: '/web-regDoc', component: Web_regDoc }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
  
const app = Vue.createApp({
    data() {
        return {
            
        }
    }
})