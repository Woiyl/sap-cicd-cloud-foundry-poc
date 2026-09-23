// Use the Node.js built-in test framework.
const test = require("node:test");
const assert = require("node:assert/strict");
const { createGreeting } = require("../lib/greeting");

// The pipeline must stop if this expected result changes. This is just to test the webhook.
test("creates the expected greeting", () => {
  assert.equal(createGreeting("Cloud Foundry"), "Hello Cloud Foundry");
});
