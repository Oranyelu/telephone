class Telephone {
    constructor() {
        this.observers = new Set();
    }

    addPhoneNumber(observer) {
        this.observers.add(observer);
    }

    removePhoneNumber(observer) {
        this.observers.delete(observer);
    }

    dialPhoneNumber(number) {
        for (let observer of this.observers) {
            observer.receiveCall(number);
        }
    }

    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}

class Observer {
    constructor(subject, number) {
        this.number = number;
        this.subject = subject;
        subject.addPhoneNumber(this);
    }

   
    receiveCall(number) {
        console.log(` ${number}`);
    }
}

class SpecificObserver {
    constructor(subject, number) {
        this.number = number;
        this.subject = subject;
        subject.addPhoneNumber(this);
    }

    receiveCall(number) {
        console.log(`Now Dialing ${number}`);
    }
}

// Create a new telephone
const telephone = new Telephone();

// Create two observers
const observer2 = new Observer(telephone, "2347023232");
const observer1 = new SpecificObserver(telephone, "2347023232");

// Dial a number
telephone.dialPhoneNumber("2347023232");
// Output:
//  2347023232
// Now Dialing 2347023232