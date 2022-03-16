// month.mjs (ES-модуль)

import { monthFromDate } from './month-from-date.js';

const dateString = process.argv[2] ?? null;

console.log(monthFromDate(dateString));