/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('Nex Computer Homepage Check', async ({ page }) => {

  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Nex Computer/i);

  const homeLink = page.getByRole('link', { name: 'Home' });
  await expect(homeLink).toBeVisible({ timeout: 15000 });
  await homeLink.screenshot({ path: 'screenshots/home-link.png' });
  await expect(homeLink).toBeVisible();
});