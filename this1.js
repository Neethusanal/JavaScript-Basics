const obj = {
    prop: 'Hello',
    greet: () => {
      console.log(this.prop);
    }
  };
  
  obj.greet(); // undefined (this does not refer to obj)
  