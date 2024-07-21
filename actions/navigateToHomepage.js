import { VARS } from '../main.js'

import { page } from '../common/init.js'

export async function navigateToHomepage() {
  await page.goto(`${VARS.BASE_URL}/`)

  // also wait for the products to load
  await page.locator('//div[@data-cy="product-list"]').waitFor()
}
