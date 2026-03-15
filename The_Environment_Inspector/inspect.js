const fs = require("fs");
const path = require("path");

// Header
console.log("─────────────────────────────────────");
console.log("Node.js Environment Report");
console.log("─────────────────────────────────────");

// Node version
console.log("Node.js version:     ", process.version);

// Working directory
console.log("Working directory:   ", process.cwd());

// Script directory
console.log("Script directory:    ", __dirname);

// Current time
console.log("Current time:        ", new Date().toISOString());

// APP_ENV variable
const appEnv = process.env.APP_ENV || "not set";
console.log("APP_ENV:             ", appEnv);

// Extra CLI arguments
const args = process.argv.slice(2);
console.log(
  "Extra arguments:     ",
  args.length ? args.join(", ") : "none"
);

// Dependencies count
const packagePath = path.join(__dirname, "package.json");

let depCount = 0;

try {
  if (!fs.existsSync(packagePath)) {
    console.log("Dependencies count:  package.json not found");
  } else {
    const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    depCount = pkg.dependencies
      ? Object.keys(pkg.dependencies).length
      : 0;

    console.log("Dependencies count: ", depCount);
  }
} catch (err) {
  console.log("Dependencies count:  error reading package.json");
}

console.log("─────────────────────────────────────");