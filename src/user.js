export {User, AdminUser, DevUser, UberDevUser};

class User {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    helloText () {
        return 'Hello, I\' m ' + this.name + '!';
    }
    sayHello() {
        console.log(this.helloText());
    }
}

class AdminUser extends User {
    helloText() {
        return super.helloText() + ' Did you know that 123456 is NOT a secure password?';
    }
}

class DevUser extends User {
    helloText() {
        return super.helloText() + ' I develop Software.';
    }
}

class UberDevUser extends DevUser {
    helloText() {
        return super.helloText() + ' All other developers suck!';
    }
}

