import { exec } from "@krakenjs/grabthar-release/scripts/grabthar-utils.js";

import { getNodeOps, getPackage } from "./utils";

const web = async (cmd, options) => {
  // const cmdString = `JENKINS_HOME=0 npx @paypalcorp/web ${cmd}`;
  // return await $`${cmdString}`;
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

  if (!module) {
    throw new Error(`Module name required`);
  }

  if (!namespace) {
    throw new Error(`Namespace required`);
  }

  const response = await web("stage --json", options);
  const { id, message } = response;

  //debug
  console.log(response);

  console.info(message);
};

run();
