function personIntro() {
    console.log(`${this.firstName} ${this.lastName}`);
  };
  
  const person1 = {
    firstName: 'Sanjeev',
    lastName: 'Sharma'
  };
  
  personIntro(); // Output 1: undefined undefined
  
  personIntro.call(person1); // Output 2: Sanjeev Sharma
  
  personIntro.call({ firstName : 'Harry', lastName : 'Potter' }); // Output 3: