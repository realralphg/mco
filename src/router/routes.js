
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', 
        component: () => import('pages/Home.vue') 
      },
      { path: '/aboutus', 
        component: () => import('pages/AboutUs.vue') 
      },
      { path: '/tolet', 
        component: () => import('pages/ToLet.vue') 
      },
      { path: '/forsale', 
        component: () => import('pages/ForSale.vue') 
      },
      { path: '/contactus', 
        component: () => import('pages/ContactUs.vue') 
      }            
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
