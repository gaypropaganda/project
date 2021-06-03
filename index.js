console.log("Halo");
import fs from "fs";
import _ from "lodash";
console.log(fs.readFileSync("test.js", "utf-8"));
console.log(_.intersection([1, 2], [2, 3]));

const fn = (a, b) => {
  const c = a + b;
  return c;
};
