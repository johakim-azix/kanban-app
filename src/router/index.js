import { createRouter, createWebHistory } from 'vue-router'
import kanbanView from "@/views/KanbanView";

const routes = [
  {
    path: '/',
    name: 'kanban',
    component: kanbanView
  },
  {
    path: '/promodoro',
    name: 'about',
    component: () => import('../views/PromoDoroView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
