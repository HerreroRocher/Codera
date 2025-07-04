#!/usr/bin/env node

import askProjectName from "../lib/prompts/getProjName.js";

async function main() {
  const proj_name = await askProjectName();
  console.log("The project name is:", proj_name);
}

main();