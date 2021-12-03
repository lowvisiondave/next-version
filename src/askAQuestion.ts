import inquirer from "inquirer";

export const askAQuestion = async (options: inquirer.Question) => {
    const resultOfQustion = await inquirer.prompt([
        {
            ...options,
            name: "answer"
        }
    ]);

    return resultOfQustion.answer;
}; // close
