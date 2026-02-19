import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
