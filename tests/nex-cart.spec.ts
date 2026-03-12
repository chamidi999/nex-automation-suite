/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('Add ASUS TUF Laptop to Cart', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const laptopImage = page.getByAltText('ASUS TUF F15 Gaming Laptop');
  await laptopImage.click({ force: true });

  const addToCartBtn = page.getByRole('button', { name: /Add to cart/i }).first();
  await addToCartBtn.click();

  const cartLink = page.getByRole('link', { name: /cart/i }).or(page.locator('a[href*="cart"]')).first();
  
  await expect(cartLink).toContainText('1', { timeout: 15000 });

  await page.screenshot({ path: 'screenshots/cart-success.png' });
});