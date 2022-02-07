class Car{

//static variable or static property assign value 0
    static numberOfCars = 0;

//static method created
    static beginRace(){
      console.log("The race has begun!");
    }
  
// Constructor for this class that accept model argument 
// That is Mustang,Corvette,Challenger.
    constructor(model){
      this.model = model;

// The Car keyword is same as (this) keyword except we are naming 
// the class name
      Car.numberOfCars += 1;
    }
  }
//Create a New instance
  let car1 = new Car("Mustang");
  let car2 = new Car("Corvette");
  let car3 = new Car("Challenger");
  
  console.log(Car.numberOfCars); //it will print 3
  
/*Static property more or less property of class itself then
 any one object same with the static method*/
  console.log(car1.numberOfCars);  //it will print undefined 
  
  Car.beginRace();
//it will print Uncaught TypeError: car1.beginRace() is not a function 
  car1.beginRace();