function outerFunction() {
    const value = 42;
  
    const regularFunction = function () {
      console.log('Regular Function this:', this);
      console.log('Regular Function value:', value);
    };
  
    const arrowFunction = () => {
      console.log('Arrow Function this:', this);
      console.log('Arrow Function value:', value);
    };
  
    regularFunction();
    arrowFunction();
  }
  
  const obj = {
    value: 99,
    outerFunction: outerFunction
  };
  
  obj.outerFunction();
  