import { browser } from 'k6/browser'

export let page, context

export async function initializeBrowser() {
  // this is done here so that a single page object can be used across multiple actions
  context = await browser.newContext();
  page = await context.newPage();
}
