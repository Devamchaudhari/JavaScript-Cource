//Parent and Child Class
// Parent class
class Person{
	constructor (name, age){
		this.name = name;
		this.age = age;
	}
}

// Child Class
class Programmer extends Person{
	constructor(name,age,yearsOfExperience){
		// super keyword use to get the parent constructor elements name and age
        super(name,age);

	//custom behaviour
	this.yearsOfExperience = yearsOfExperience;
	}
}

let person1= new Person("Devam",20,1);
let programmer1= new Programmer("Devam",20,1);

 //it will print person{name: Devam, age: 20}
console.log(person1);
 //it will print person{name: Devam, age: 20, yearOfExperience: 1}
console.log(programmer1);