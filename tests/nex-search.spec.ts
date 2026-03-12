/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('Nex Computer Search Functionality - Final Fix', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const searchInput = page.getByPlaceholder(/Search for products/i).filter({ visible: true }).first();
  
   const mobileSearchBtn = page.locator('header button').filter({ has: page.locator('svg') }).first();

  if (!(await searchInput.isVisible())) {
    console.log('Search input is hidden, clicking mobile search button...');
    await mobileSearchBtn.click();
    await expect(searchInput).toBeVisible({ timeout: 10000 });
  }

  await searchInput.fill('Laptop');
  await searchInput.press('Enter');


  await expect(page).toHaveURL(/search/i, { timeout: 20000 });
  await expect(page.locator('body')).toContainText('Laptop', { timeout: 15000 });
});