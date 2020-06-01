const white: String = "\x1b[0m";
const red: String = "\x1b[31m";
const green: String = "\x1b[32m";
const yellow: String = "\x1b[33m";

function error(val: any) {
  return (red + val + white);
}

function success(val: any) {
  return (green + val + white);
}

function warning(val: any) {
  return (yellow + val + white);
}
function errorLog(val: any) {
  console.log(red + val + white);
}

function successLog(val: any) {
  console.log(green + val + white);
}

function warningLog(val: any) {
  console.log(yellow + val + white);
}

export { error, success, warning, errorLog, successLog, warningLog };
