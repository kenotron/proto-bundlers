import express from "express";
import { rollup } from "rollup";
import fs from "fs-extra";
import path from "path";
import crypto from "crypto";

const app = express();
const base = path.resolve(__dirname, "../");

app.set("view engine", "ejs");
app.set("views", path.join(base, "views"));
app.get("/cache/*", (req, res) => {
  const file = path.join(base, "cache", req.params[0]);

  if (fs.existsSync(file)) {
    console.log("serves cache");
    res
      .status(201)
      .header("cache-control", "max-age=86400")
      .sendFile(file);
  } else {
    console.log("recreate cache!");
    res.redirect(req.params[0].replace(/-.*\.js/, ".js"));
  }
});

// Mark the entry point for bundling
app.get("/js/index.js", async (req, res) => {
  let file = path.join(base, "views", req.path);

  let dev = Object.getOwnPropertyNames(req.query).includes("dev");
  if (dev) {
    return res
      .header(
        "cache-control",
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
      )
      .sendFile(file);
  }

  // This the actual bundling as a service step
  let bundle = await rollup({
    input: file
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("delay done!");
      resolve();
    }, 1000);
  });

  let bundled = await bundle.generate({ format: "esm" });
  let js = bundled.output[0].code;

  // get the sha
  let hash = crypto.createHash("sha1");
  hash.update(Buffer.from(js));
  let sha = hash.digest("hex").substr(0, 7);
  let fingerprint = req.path.replace(".js", `-${sha}.js`);
  let dest = path.join(base, "cache", fingerprint);

  fs.mkdirpSync(path.dirname(dest));
  console.log(`caching: ${dest}, fingerprint: ${fingerprint}`);
  fs.writeFileSync(dest, js);

  return res
    .header("cache-control", "max-age=86400")
    .redirect(`/cache${fingerprint}`);
});

// all other javascript files
app.get("/js/*", async (req, res) => {
  let file = path.join(base, "views", req.path);
  if (fs.existsSync(file)) {
    return res
      .header(
        "cache-control",
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
      )
      .sendFile(file);
  }
});

app.get("/*", (req, res) => {
  let dev = Object.getOwnPropertyNames(req.query).includes("dev");
  res.render("index", { dev });
});

app.listen(3000, () => {
  console.log("listening to http://localhost:3000");
});
