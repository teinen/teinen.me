import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./pages/About.vue")
    },
    {
      path: "/skill",
      name: "skill",
      component: () =>
        import(/* webpackChunkName: "skill" */ "./pages/Skill.vue")
    },
    {
      path: "/work",
      name: "work",
      component: () => import(/* webpackChunkName: "work" */ "./pages/Work.vue")
    },
    {
      path: "/accounts",
      name: "accounts",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./pages/Accounts.vue")
    }
  ]
});
