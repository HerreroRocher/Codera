import inquirer from "inquirer";

async function askProjectName() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-app",
    },
  ]);

  console.log("name: ", projectName);
}

askProjectName();