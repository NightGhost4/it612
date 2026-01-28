// Tyler Norcross | 01/23/2026

// nearHundred
function nearHundred(n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}

// lastDigit
function lastDigit(a, b) {
  return a % 10 === b % 10;
}

// sleepIn
function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

// icyHot
function icyHot(temp1, temp2) {
  return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
}

// intMax
function intMax(a, b, c) {
  return Math.max(a, b, c);
}

// hasTeen
function hasTeen(a, b, c) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}

// makes10
function makes10(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}

// parrotTrouble
function parrotTrouble(talking, hour) {
  return talking && (hour < 7 || hour > 20);
}

// cigarParty
function cigarParty(cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40;
  } else {
    return cigars >= 40 && cigars <= 60;
  }
}

// less20
function less20(n) {
  return n % 20 === 18 || n % 20 === 19;
}
