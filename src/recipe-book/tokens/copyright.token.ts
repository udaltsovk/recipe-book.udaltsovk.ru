import { InjectionToken } from "@angular/core";

export const COPYRIGHT_NAME = "Кирилл Удальцов";

export const COPYRIGHT_NAME_TOKEN = new InjectionToken<string>("COPYRIGHT_NAME", {
  providedIn: "root",
  factory: (): string => COPYRIGHT_NAME,
});
