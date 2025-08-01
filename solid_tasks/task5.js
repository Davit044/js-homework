class MessageService {
    send() {
        throw new Error("send() must be implemented");
    }
}

class EmailService extends MessageService {
    send(message) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSService extends MessageService {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

class MessageSender {
    constructor(service) {
        this.service = service;
    }

    sendMessage(message) {
        this.service.send(message);
    }
}

const emailService = new EmailService();
const smsService = new SMSService();

const sender1 = new MessageSender(emailService);
sender1.sendMessage("Hello via Email!");

const sender2 = new MessageSender(smsService);
sender2.sendMessage("Hello via SMS!");   
