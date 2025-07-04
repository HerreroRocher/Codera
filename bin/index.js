#!/usr/bin/env node

import getReactPreferences from "../lib/prompts/getReactPreferences.js";
import createReactApp from "../lib/create_react_app.js";

async function main() {
  const { projectName, pathName } = await getReactPreferences();
  await createReactApp(projectName, pathName);
  
  

}

main()