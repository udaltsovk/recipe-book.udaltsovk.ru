import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  template: `
    <div class="app-wrapper">
      <app-header />
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  // templateUrl: "./app.html",
  styleUrl: "./app.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent],
})
export class App {}
