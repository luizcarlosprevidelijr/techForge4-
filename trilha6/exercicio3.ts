//Sistema de Envio de Emails e Validação de Contato
class EmailSender {
    sendEmail(email: string): void {
        if (this.validateContact(email)) {
            console.log(`Email sent to ${email}.`);
        } else {
            console.log("Invalid email.");
        }
    }

    validateContact(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

const emailSender = new EmailSender();
emailSender.sendEmail("test@example.com");

//Refatorado para Separação de Responsabilidades:
class ContactValidator {
    validate(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(email: string): void {
        if (this.contactValidator.validate(email)) {
            console.log(`Email sent to ${email}.`);
        } else {
            console.log("Invalid email.");
        }
    }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);
emailSender.sendEmail("test@example.com");
