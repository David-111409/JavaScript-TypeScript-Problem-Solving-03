function greetingMaker(call) {
	return function closure(name) {
	  return  call + ", " + name 	
	}
}
const greeting = greetingMaker("Hello");

console.log(greeting("James"), "Hello, James");
console.log(greeting("John"), "Hello, John");
console.log(greeting("Jacob"), "Hello, Jacob");
console.log(greeting("Joseph"), "Hello, Joseph");
