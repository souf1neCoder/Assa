import { createApp } from 'vue'
// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Reset Css
import "./assets/css/reset.css";
// app
import App from './App.vue'
// AOS
import AOS from "aos";
import "aos/dist/aos.css";


// router
import router from './router'
// 
createApp(App).use(router,AOS.init()).mount('#app')
