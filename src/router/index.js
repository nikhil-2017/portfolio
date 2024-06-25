import { createRouter, createWebHistory } from 'vue-router'
import Config from '@/config/main.js'

// App Layout
import AppLayout from '@/layouts/app/AppLayout.vue'

import Home from '@/views/Home.vue'
import Skill from '@/views/Skill.vue'
import Education from '@/views/Education.vue'
import Project from '@/views/Project.vue'
import WorkExperience from '@/views/WorkExperience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'skills',
          name: 'Skills',
          component: Skill,
          meta: { title: 'Skills' }
        },
        {
          path: 'education',
          name: 'Education',
          component: Education,
          meta: { title: 'Education' }
        },
        {
          path: 'projects',
          name: 'Project',
          component: Project,
          meta: { title: 'Projects' }
        },
        {
          path: 'work-experience',
          name: 'WorkExperience',
          component: WorkExperience,
          meta: { title: 'Work Experience' }
        }
      ]
    }
  ]
})

router.afterEach((to) => {
  console.log(to)
  console.log(Config.APP_NAME)
  var pageTitle = to?.meta?.title
  if (pageTitle != undefined && pageTitle != null && pageTitle != '')
    document.title = `${pageTitle} - ${Config.APP_NAME}`
})

export default router
