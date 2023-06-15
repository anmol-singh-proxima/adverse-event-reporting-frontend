import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";
import CreateReportPage from "./views/CreateReportPage";
import UpdateReportPage from "./views/UpdateReportPage";
import ViewAllReportsPage from "./views/ViewAllReportsPage";
import ViewSingleReportPage from './views/ViewSingleReportPage'
import IncrementsPage from "./views/IncrementsPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    component: HomePage,
    path: "/",
  },
  {
    name: "login",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "signup",
    component: SignupPage,
    path: "/signup",
  },
  {
    name: "create-report",
    component: CreateReportPage,
    path: "/report/create",
  },
  {
    name: "update-report",
    component: UpdateReportPage,
    path: "/report/update/:id",
  },
  {
    name: "view-report",
    component: ViewAllReportsPage,
    path: "/report/view",
  },
  {
    name: "view-single-report",
    component: ViewSingleReportPage,
    path: "/report/view/:id",
  },
  {
    name: "increments",
    component: IncrementsPage,
    path: "/increments",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
