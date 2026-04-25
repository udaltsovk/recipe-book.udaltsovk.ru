import { expect, test } from "@playwright/test";
import { APP_NAME } from "../src/recipe-book/tokens/app-name.token";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(RegExp(APP_NAME));
});
