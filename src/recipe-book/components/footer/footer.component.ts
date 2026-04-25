import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FooterLinkDirective } from "../../directives/footer-link.directive";
import { SvgIconDirective } from "../../directives/svg-icon.directive";
import { FOOTER_LINKS_TOKEN } from "../../tokens/footer-links.token";
import { COPYRIGHT_NAME_TOKEN } from "../../tokens/copyright.token";

@Component({
  selector: "recipe-book-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FooterLinkDirective, SvgIconDirective],
})
export class FooterComponent {
  protected readonly footerLinks = inject(FOOTER_LINKS_TOKEN);
  protected readonly copyrightName = inject(COPYRIGHT_NAME_TOKEN);
  protected readonly currentYear = new Date().getFullYear();
}
