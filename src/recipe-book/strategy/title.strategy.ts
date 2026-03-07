import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { APP_NAME } from "../tokens/app-name.token";

@Injectable()
export class RecipeBookTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly appName = inject(APP_NAME);

  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot) || this.title.getTitle();
    this.title.setTitle(`${pageTitle} | ${this.appName}`);
  }
}
