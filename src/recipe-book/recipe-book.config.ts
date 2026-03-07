import { APP_ID, ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withViewTransitions,
} from "@angular/router";
import { provideMarkdown } from "ngx-markdown";
import { routes } from "./recipe-book.routes";
import { RecipeBookTitleStrategy } from "./strategy/title.strategy";

export const recipeBookConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideMarkdown(),
    { provide: APP_ID, useValue: "recipe-book" },
    { provide: TitleStrategy, useClass: RecipeBookTitleStrategy },
  ],
};
