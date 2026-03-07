import { InjectionToken } from "@angular/core";

export const COPYRIGHT_NAME = new InjectionToken<string>("COPYRIGHT_NAME", {
  providedIn: "root",
  factory: (): string => "Кирилл Удальцов",
});
