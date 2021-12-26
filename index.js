const fs = require("fs");

const regex = new RegExp("([^/]+$)");
const items = fs.readFileSync("urls.txt").toString().split("\n");

items.forEach((item) => {
  const result = regex.exec(item);
  if (!result || result.length == 0) return "";

  const output = result[0];
  const wordCount = output.split("-").length;

  if (wordCount <= 5) {
    const headline = output.replace(".html", "").replace(/-/g, " ") + "\r\n";

    fs.appendFileSync("headlines.txt", headline);
  }
});
