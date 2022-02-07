function Alien(name,tech){
	this.name = name;
	this.tech = tech;
}
 
let alien1 =  new Alien('raptor','JS');
let alien2 =  new Alien('glider','JSON');

alien1.tech = 'Python';
//it will print Alien { name : 'raptor', tech: 'Python' }
console.log(alien1); 
