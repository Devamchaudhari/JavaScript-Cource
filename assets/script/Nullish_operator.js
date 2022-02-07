// Example1
let user;
alert(user ?? "Anonymous"); // Anonymous (user not defined)

// Example2
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// Example3 Comparision with OR operator
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// Example4 Using Precedence Bracket()
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000