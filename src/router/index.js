import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from  '../views/jobs/Jobs.vue'
import jobDetails from  '../views/jobs/jobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home 
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs/Jobs.vue',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },
  {
    //redirect
    path:'/all-jobs',
    redirect: '/jobs' 
  },
  {
    //Catch 404
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
