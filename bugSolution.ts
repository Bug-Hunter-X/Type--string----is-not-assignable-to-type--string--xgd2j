function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type assertion
console.log(greeter(user.join(' ')));
// Solution 2: Modify function signature to accept an array of strings
function greeter2(persons: string[]): string {
    return "Hello, " + persons.join(' ');
}
console.log(greeter2(user));