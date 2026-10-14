const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let tasks = [];

function showMenu() {
    console.log("\n--- JavaScript Todo List App ---");
    console.log("1. View Tasks");
    console.log("2. Add Task");
    console.log("3. Delete Task");
    console.log("4. Exit");
    
    rl.question("\nChoose an option (1-4): ", handleChoice);
}

function handleChoice(choice) {
    switch (choice.trim()) {
        case '1':
            if (tasks.length === 0) {
                console.log("\nYour todo list is currently empty!");
            } else {
                console.log("\nYour Tasks:");
                tasks.forEach((task, index) => {
                    console.log(`  ${index + 1}. ${task}`);
                });
            }
            showMenu();
            break;

        case '2':
            rl.question("\nEnter the task description: ", (task) => {
                if (task.trim() !== "") {
                   
                    tasks.push(task.trim());
                    console.log(`'${task.trim()}' added successfully!`);
                } else {
                    console.log("Task cannot be empty.");
                }
                showMenu();
            });
            break;

        case '3':
            if (tasks.length === 0) {
                console.log("\nNo tasks to delete!");
                showMenu();
            } else {
                console.log("\nYour Tasks:");
                tasks.forEach((task, index) => {
                    console.log(`  ${index + 1}. ${task}`);
                });
                
                rl.question("\nEnter the number of the task to delete: ", (numStr) => {
                    let taskNum = parseInt(numStr);
                    if (!isNaN(taskNum) && taskNum >= 1 && taskNum <= tasks.length) {
                        
                        let removed = tasks.splice(taskNum - 1, 1);
                        console.log(`Removed: '${removed}'`);
                    } else {
                        console.log("Invalid task number.");
                    }
                    showMenu();
                });
            }
            break;

        case '4':
            console.log("\nExiting Todo App. Goodbye!");
            rl.close();
            break;

        default:
            console.log("Invalid choice. Please enter a number between 1 and 4.");
            showMenu();
            break;
    }
}


showMenu();