import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventLayout from '../views/event/LayoutView.vue'
import EventDetails from '../views/event/DetailsView.vue'
import EventRegister from '../views/event/RegisterView.vue'
import EventEdit from '../views/event/EditView.vue'

import SimpleFormView from '../views/forms/SimpleFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        // return { name: 'event-details', params: { id: to.params.id } }
        return { path: '/events/' + to.params.afterEvent }
      }
      // children: [
      //   { path: 'register', redirect: () => ({ name: 'event-register' }) },
      //   { path: 'edit', redirect: () => ({ name: 'event-edit' }) }
      // ]
    },
    {
      path: '/about-us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
      // alias: '/about'
    },
    // {
    //   path: '/about',
    //   redirect: { name: 'about' }
    // }
    {
      path: '/forms/simple',
      name: 'simple',
      component: SimpleFormView
    }
  ]
})

export default router
