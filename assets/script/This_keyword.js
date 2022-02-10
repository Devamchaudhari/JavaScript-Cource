const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
let fullname = person.fullName.bind(member);
console.log(fullname()); //Hege Nilsen