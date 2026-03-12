/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('Nex Computer Search Functionality', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const searchBar = page.getByPlaceholder(/Search for products/i).first();
  
  await searchBar.fill('Laptop');
  await searchBar.press('Enter');


  await expect(page.getByRole('heading', { name: /Search/i })).toBeVisible();
  await expect(page.locator('body')).toContainText('Laptop');
});