import { InjectionToken } from "@angular/core";
import { FooterLink } from "../models/footer-link";
import { footerLinks } from "../content/footer-links";

export const FOOTER_LINKS = new InjectionToken<FooterLink[]>("FOOTER_LINKS", {
  providedIn: "root",
  factory: (): FooterLink[] => footerLinks,
});
