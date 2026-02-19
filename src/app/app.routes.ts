import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
    title: "Книга Рецептов - Главная",
  },
  {
    path: "**",
    loadComponent: () => import("./pages/not-found/not-found.page").then(m => m.NotFoundPage),
    title: "not-found - Страница не найдена",
  },
];
