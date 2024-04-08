import { test, expect } from "@playwright/test";

test("shows correct username on landing page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const user = page.getByTestId("user-copy");

  await expect(user).toContainText("Ajeet!!");
});
