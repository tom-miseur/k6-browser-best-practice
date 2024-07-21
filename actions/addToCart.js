import { page } from '../common/init.js'

export async function addToCart() {
  await Promise.all([
    page.waitForNavigation(),
    page.locator('//button[@data-cy="product-add-to-cart"]').click(),
  ])

  // print out the number of items in the cart
  const cartContent = await page.locator('//span[@data-cy="cart-item-count" and text()="1"]').textContent()
  console.log(`Items in cart: ${cartContent}`)
}
