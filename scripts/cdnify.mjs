import { $ } from "zx";
import fs from "fs-extra";
import { exec } from "@krakenjs/grabthar-release/scripts/grabthar-utils.js";

const getPackage = () => {
  if (!fs.existsSync("./package.json")) {
    throw new Error(`Package file not found`);
  }
  return JSON.parse(fs.readFileSync("./package.json"));
};

const getNodeOps = () => {
  if (!fs.existsSync("./.nodeops")) {
    throw new Error(`Node Ops file not found`);
  }
  return JSON.parse(fs.readFileSync("./.nodeops"));
};

const web = async (cmd, options) => {
  return await exec(`npx @paypalcorp/web ${cmd}`, {
    JENKINS_HOME: "0",
    // SVC_ACC_USERNAME: options.username,
    // SVC_ACC_PASSWORD:
    //   options.password || (await getPassword(options.requester)),
  });
};

const run = async () => {
  const module = getPackage().name;
  const namespace = getNodeOps().web.staticNamespace;
  const version = getPackage().version;

  if (!module) {
    throw new Error(`Module name required`);
  }

  if (!namespace) {
    throw new Error(`Namespace required`);
  }

  if (!version) {
    throw new Error(`CDN required`);
  }

  await $`mkdir -p cdn/${version}`;
  await $`npm run build-logos -- cdn/${version}`;

  const options = { username: "dustijones", password: "Ojeu2493@#" };
  const response = await web("stage --json", options);
  const { id, message } = response;
  console.info(message);
};

run();
