#!/usr/bin/env node
const { execSync } = require('child_process');

const env = {
  VITE_GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwcJFApNG_rM3LwH6R7R0ElCr9PsIJ9-nJ9MGJ4tnzOFrSv8g0I2-LWY0LQPgJG6jU5/exec'
};

Object.entries(env).forEach(([key, value]) => {
  try {
    console.log(`\nSetting ${key}...`);
    const cmd = `vercel env add ${key} production`.split(' ');
    execSync(`echo "${value}" | vercel env add ${key} production`, {
      stdio: 'inherit',
      shell: true
    });
  } catch (e) {
    console.error(`Failed to set ${key}:`, e.message);
  }
});
