import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Accueil from '../views/Accueil.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Assa Maroc"
    }
  },
  
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil,
    meta:{
      title:"Assa | Accueil"
    }
  },
  
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta:{
      title:"Assa | Contact"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`;
  next();
})
export default router
