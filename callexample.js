function personIntro(city, state) {
    console.log(`${this.name} is from ${city}, ${state}`);
  };
  
  const person = {
    name: 'Max',
    age: 26
  }
  
  personIntro.call(person, 'Los Angeles', 'California'); 