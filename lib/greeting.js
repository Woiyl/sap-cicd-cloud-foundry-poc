// Returns the message used by the POC test.
function createGreeting(name) {
  return `Hello ${name}`;
}

// Export the function so Node's test runner can validate it.
module.exports = { createGreeting };
