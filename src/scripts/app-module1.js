'use strict';

export class Person {
    constructor(firstName, secondName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.secondName = secondName;
    }

    getFullName() {
        return ` ${this.lastName} ${this.firstName} ${this.secondName}`;
    }
    і;
    toString() {
        return JSON.stringify({
            fName: this.firstName,
            lName: this.lastName,
            sName: this.secondName,
        });
    }
}

// дата, вес, размер грудной клетки, талия, пресс, бедра, нога, игра, рука
