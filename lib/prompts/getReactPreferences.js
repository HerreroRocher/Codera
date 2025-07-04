import inquirer from "inquirer";

const getReactPreferences = async() => {
  
  const currentWorkingDir = process.cwd();


  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-app",
    },
  ]);

  const { pathName } = await inquirer.prompt([
    {
      type: "input",
      name: "pathName",
      message: "Enter your the path you'd like to start the project:",
      default: currentWorkingDir,
    },
  ]);

  return { projectName, pathName };
}

export default getReactPreferences;