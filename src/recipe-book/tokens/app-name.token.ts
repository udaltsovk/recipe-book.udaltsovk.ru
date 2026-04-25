import { InjectionToken } from "@angular/core";

export const APP_NAME = "Книга Рецептов";

export const APP_NAME_TOKEN = new InjectionToken<string>("APP_NAME", {
  providedIn: "root",
  factory: (): string => APP_NAME,
});
