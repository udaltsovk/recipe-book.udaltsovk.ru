import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { APP_NAME } from "../../tokens/app-name.token";

@Component({
  selector: "recipe-book-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
})
export class HeaderComponent {
  protected readonly appName = inject(APP_NAME);
}
