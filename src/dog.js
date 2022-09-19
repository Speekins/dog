class Dog {
  constructor(dog) {
    this.name = dog.name;
    this.age = dog.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }

  eat() {
    if (!this.hungry) {
      return 'I refuse to eat.'
    }
    this.hungry = false;
    return 'Yum!';
  }

  fetchBall() {
    if (this.energyLevel <= 3) {
      return 'Nah, I\'m going to sleep instead.'
    }
    this.energyLevel -= 1;
    return 'This is fun!'
  }

  sleep() {
    if (this.energyLevel === 10) {
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }
    this.energyLevel += 1;
  }

  makeNewFriend(dog) {
    this.friends.push(dog.name);
  }
}

module.exports = Dog;
