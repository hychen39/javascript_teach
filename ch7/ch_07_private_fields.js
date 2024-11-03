class Dog {
    #name;
    #age;
    constructor(name, age) {
        // call setters to set name and age
        this.#name = name;
        this.#age = age;
        this.bark = function() {
                console.log('bark method');
                console.log(`${this.#name} Wang Wang`);
        };
    }

    get name(){
        console.log('Getting name');
        return this.#name;
    }
    set name(name){
        console.log('Setting name to ' + name);
        this.#name = name;
    }

    get age(){
        return this.#age;
    }
    set age(age){
        // validate age not negative
        age = age < 0 ? 0 : age;
        console.log('Age is less than 0. Set to 0.');
        this.#age = age;
    }
}

let dog = new Dog('Wangcai', 1);
console.log(dog.name); // Wangcai
console.log(dog.age); // 
dog.bark(); 