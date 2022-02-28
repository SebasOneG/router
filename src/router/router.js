import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard.js";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import(/*webpackChunkName: "ListPage"*/ "../modules/pokemon/layouts/PokemonLayout.vue"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () => import(/*webpackChunkName: "ListPage"*/ "../modules/pokemon/pages/ListPage"),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () => import(/*webpackChunkName: "about"*/ "../modules/pokemon/pages/AboutPage"),
      },
      {
        path: "pokemon/:id",
        name: "pokemon-id",
        component: () => import(/*webpackChunkName: "PokemonPage"*/ "../modules/pokemon/pages/PokemonPage"),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-home" },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () => import(/*webpackChunkName: "DragonBallLayout"*/ "../modules/dbz/layouts/DragonBallLayout.vue"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import(/*webpackChunkName: "Characters"*/ "@/modules/dbz/pages/Characters.vue"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import(/*webpackChunkName: "about"*/ "@/modules/dbz/pages/About.vue"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(/*webpackChunkName: "NoPageFound"*/ "../modules/shared/pages/NoPageFound"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("autenticado");
//     next();
//   } else {
//     console.log("bloqueado");
//     next({ name: "pokemon-home" });
//   }
// });

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("autenticado");
//       resolve(true);
//     } else {
//       console.log("bloqueado");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   if (!authorized) return next({ name: "pokemon-home" });
//   next();
// });

export default router;
