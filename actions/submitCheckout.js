import { page } from '../common/init.js'

export async function submitCheckout() {
  Promise.all([
    page.waitForNavigation(),
    page.locator('//button[@data-cy="checkout-place-order"]').click(),
  ])
  
  // wait for confirmation header
  const confirmationHeader = await page.locator('//h1[text()="Your order is complete!"]').innerText()
  console.log(`Confirmation: ${confirmationHeader}`);
}
