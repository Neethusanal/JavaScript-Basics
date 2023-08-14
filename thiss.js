const person = {
  firstName: 'Sanjeev',
  lastName: 'Sharma',
  age: 22,
  getIntro: function() {
    //console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
    console.log(this.firstName)
  }
}

person.getIntro(); // "Sanjeev Sharma is 22 years old."

function randomFunc() {
  console.log(this);
}

randomFunc(); // windo