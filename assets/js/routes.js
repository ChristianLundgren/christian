// Routing
var router = new VueRouter({
  mode: 'history',
  base: window.location.pathname,
  routes: [
    {
      path: '/:pageSlug?',
    },
  ]
});
