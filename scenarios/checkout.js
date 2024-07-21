
import { sleep } from 'k6'

import { initializeBrowser } from '../common/init.js'

import { navigateToHomepage } from '../actions/navigateToHomepage.js'
import { selectProduct } from '../actions/selectProduct.js'
import { addToCart } from '../actions/addToCart.js'
import { submitCheckout } from '../actions/submitCheckout.js'

export async function checkout() {
  // the below function sets up context and page objects so that they can be imported in other files
  await initializeBrowser()

  await navigateToHomepage()
  sleep(1)
  await selectProduct()
  sleep(1)
  await addToCart()
  sleep(1)
  await submitCheckout()
  sleep(1)
}
