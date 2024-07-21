import { randomItem } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

import { page } from '../common/init.js'

export async function selectProduct() {
  // grab all of the products
  const productCards = await page.$$('//div[@data-cy="product-card"]')
  console.log(`Found ${productCards.length} product cards`)

  const randomProductCard = randomItem(productCards)

  await Promise.all([
    page.waitForNavigation(),
    randomProductCard.click(),
  ])
}
