// How many requests are allowed per minute?
const maxRequestsPerMinute = 100;

// How many requests has this user made?
let currentRequestCount = 0;

// Is this user rate limited?
let isRateLimited = false;

// Simulate a request
currentRequestCount = currentRequestCount + 1;
console.log("Requests made:", currentRequestCount);

// Check if rate limited
if (currentRequestCount > maxRequestsPerMinute) {
  isRateLimited = true;
}
console.log("Rate limited?", isRateLimited);