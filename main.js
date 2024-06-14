// Create a typescript quiz
import inquirer from "inquirer";
const start = await inquirer.prompt([{
        name: "start",
        type: "confirm",
        message: "Do you want to start quiz?",
        default: true
    }]);
let score = 0;
if (start.start) {
    const question = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            message: "What is main advantage of using Typescript",
            choices: [
                "TypeScript runs faster than JavaScript",
                "TypeScript is easier to write than JavaScript",
                "TypeScript provides static typing which helps catch errors during development.",
                "It is a superset of Typescript and Javascript"
            ],
            correct: "TypeScript provides static typing which helps catch errors during development."
        },
        {
            name: "question2",
            type: "list",
            message: "Which of the following is a primitive type in TypeScript?",
            choices: ["String", "Array", "Object", "Function"],
            correct: "String"
        },
        {
            name: "question3",
            type: "list",
            message: "How do you declare a variable in TypeScript?",
            choices: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
            correct: "All of the above"
        },
        {
            name: "question4",
            type: "list",
            message: "Which of the following is used to define a type alias in TypeScript?",
            choices: ["type", "interface", "alias", "typedef"],
            correct: "type"
        },
        {
            name: "question5",
            type: "list",
            message: "What is the extension for TypeScript files?",
            choices: [".ts", ".js", ".jsx", ".tsx"],
            correct: ".ts"
        },
        {
            name: "question6",
            type: "list",
            message: "What is used to define an interface in TypeScript?",
            choices: ["type", "interface", "class", "object"],
            correct: "interface"
        },
        {
            name: "question7",
            type: "list",
            message: "What is the default module system in TypeScript?",
            choices: ["CommonJS", "AMD", "UMD", "ES6"],
            correct: "CommonJS"
        },
        {
            name: "question8",
            type: "list",
            message: "What does the 'unknown' type represent in TypeScript?",
            choices: ["Any value", "A function", "An object", "A string"],
            correct: "Any value"
        },
        {
            name: "question9",
            type: "list",
            message: "Which of the following is used to define a type alias in TypeScript?",
            choices: ["type", "interface", "alias", "typedef"],
            correct: "type"
        },
        {
            name: "question10",
            type: "list",
            message: "Which keyword is used to inherit a class in TypeScript?",
            choices: ["extends", "inherits", "implements", "derives"],
            correct: "extends"
        },
    ]);
    if (question.question1 === "TypeScript provides static typing which helps catch errors during development.") {
        score++;
    }
    if (question.question2 === "String") {
        score++;
    }
    if (question.question3 === "All of the above") {
        score++;
    }
    if (question.question4 === "type") {
        score++;
    }
    if (question.question5 === ".ts") {
        score++;
    }
    if (question.question6 === "interface") {
        score++;
    }
    if (question.question7 === "CommonJS") {
        score++;
    }
    if (question.question8 === "Any value") {
        score++;
    }
    if (question.question9 === "type") {
        score++;
    }
    if (question.question10 === "extends") {
        score++;
    }
}
else {
    console.log("Quiz is not started");
}
if (score === 10) {
    console.log(`Congratulations! All answers are correct, Your Score is ${score}`);
}
else {
    console.log(`Your Score is ${score}`);
}
