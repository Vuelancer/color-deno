import { error, success, warning } from "./mod.ts";
import { errorLog, successLog, warningLog } from "./mod.ts";

console.log(error("Error!"));
console.log(success("Success!"));
console.log(warning("Warning!"));

errorLog("Error");
successLog("Success");
warningLog("Warning");
