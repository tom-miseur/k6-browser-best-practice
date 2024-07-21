export { checkout } from './scenarios/checkout.js';

// load options from config.json
const testConfig = JSON.parse(open('./config/test.json'));

// object for storing variables - import to use in other files
export const VARS = {}

// set the base URL for the scripts. Checks to see if it was passed via environment variable, otherwise defaults to hard-coded value
VARS.BASE_URL = __ENV.BASE_URL || 'https://otel-demo.field-eng.grafana.net';

export const options = Object.assign({
  // add hard-coded options here
}, testConfig)

export default function () {
  // unused unless no 'exec' property specified in scenario config
}
