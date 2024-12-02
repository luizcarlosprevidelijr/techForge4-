abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

const project = new Project();
project.addTask("Develop website");
project.addTask("Write documentation");

const daily = new DailyTasks();
daily.addTask("Check emails");
daily.addTask("Attend meetings");

console.log(project.listTasks());
console.log(daily.listTasks());
