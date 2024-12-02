//Gerenciamento de Usuários e Notificações
class UserManager {
    private users: string[] = [];

    createUser(username: string): void {
        this.users.push(username);
        this.sendNotification(username);
    }

    sendNotification(username: string): void {
        console.log(`Email sent to ${username}.`);
    }
}

const userManager = new UserManager();
userManager.createUser("JohnDoe");

//Refatorado para Separação de Responsabilidades:
class EmailNotification {
    sendEmail(username: string): void {
        console.log(`Email sent to ${username}.`);
    }
}

class UserManager {
    private users: string[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(username: string): void {
        this.users.push(username);
        this.emailNotification.sendEmail(username);
    }
}

const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser("JohnDoe");

