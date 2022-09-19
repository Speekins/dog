var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    if (this.dog.energyLevel === 3) {
      return;
    }
    this.dog.energyLevel -= 1;
    return `${this.dog.name} loves playing fetch!`;
  }

  introduceNewFriends(dog) {
    this.dog.makeNewFriend(dog);
  }

  adoptAPup(dogName, dogAge) {
    if (!!this.dog) {
      return `You can't adopt ${dogName}. You already have ${this.dog.name}!`
    }
    this.dog = new Dog({name: dogName, age: dogAge});
  }
}

module.exports = Person;
