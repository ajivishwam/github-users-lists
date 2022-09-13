import App from "./App.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import UserItem from "./components/UserItem.vue";
import UserPage from "./components/UserPage.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "main", component: UserPage, path: "/", children: [] },
    { name: "home", component: UserItem, path: "/home", children: [] }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
