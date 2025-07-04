import { exec } from 'child_process';
import fs from 'fs';

const createReactApp = async (proj_name, basePath) => {
  try {
    if (!fs.existsSync(basePath)) {
      throw new Error(`Directory does not exist: ${basePath}`);
    }

    process.chdir(basePath);
    console.log(`Creating React app in ${basePath}/${proj_name}...`);

    await new Promise((resolve, reject) => {
      exec(`npx create-react-app ${proj_name}`, (error, stdout, stderr) => {
        if (error) {
          return reject(`Execution error: ${error.message}`);
        }

        console.log(stdout);
        if (stderr) console.warn(`Warnings: ${stderr}`);
        resolve();
      });
    });

    console.log(`React app '${proj_name}' created successfully.`);
  } catch (error) {
    console.error(`${error}`);
  }
};

export default createReactApp;