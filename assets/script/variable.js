// let name="John";
// let admin;
// admin=name;
// alert(name);

// let planet="earth";
// let currentvisitor="devam";

// alert("planet name: "+ planet + " visitor name: " +currentvisitor );

// const birthday= '18.04.1982';
// const age = birthday;

// alert(age);


// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

const a = 0;
// a || 10 --> Will result in 10, as || operator considers 0 as falsy value and resulting the right side operand
console.log(`a || 10 = ${a || 10}`);
// a ?? 10 --> Will result in 0, as ?? operator considers 0 as truthy value and resulting the left side operand
console.log(`a ?? 10 = ${a ?? 10}`);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );