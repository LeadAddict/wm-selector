import Querystring from 'querystring';

import store from '@/store';

function checkJSONPathBeforeEnter (to, from, next) {
  if (store.getters.jsonPath === '') {
    next({ name: 'Home' });
  } else {
    next();
  }
}

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    beforeEnter (to, from, next) {
      var params = Querystring.parse(to.fullPath.replace(/^\/\?/, ''));

      if (params.jsonPath || params.list) {
        store.dispatch('loadSaveURL', params);
      } else {
        next();
      }
    }
  },
  {
    path: '/selector',
    name: 'Selector',
    component: () => import('@/views/Selector.vue'),
    beforeEnter: checkJSONPathBeforeEnter
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('@/views/Text.vue'),
    beforeEnter: checkJSONPathBeforeEnter
  },
  {
    path: '/save',
    name: 'Save',
    component: () => import('@/views/Save.vue'),
    beforeEnter: checkJSONPathBeforeEnter
  },
  {
    path: '/print',
    name: 'Print',
    component: () => import('@/views/Print.vue'),
    beforeEnter: checkJSONPathBeforeEnter
  }
];
