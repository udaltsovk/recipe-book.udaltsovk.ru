import { InjectionToken } from "@angular/core";

export const STORAGE_TOKEN = new InjectionToken<Storage>("STORAGE", {
  providedIn: "root",
  factory: (): Storage => localStorage,
});
