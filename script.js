let todo = prompt("What do you want to do: add, sub, mult, div"); 

let a = +prompt("enter first number: ");
let b = +prompt("enter second number: ");
let result;

if(isNaN(a)|| isNaN(b)){
  alert("Error: Please enter valid numbers");
}

if(todo ===  "add") {
 result = a + b; 
 todo = "+" 

}else if(todo ===  "sub") {
  result = a - b;
  todo = "-"

}else if(todo ===  "mult") {
  result = a * b; 
  todo = "*"

}else if(todo === "div") {
  if(b !== 0) {
    result = a / b;
    todo = "/"
  }else{
    result="Error: Divison by zero";
    todo = "/"
  }
}else{
  alert(result="Unexpected operation");
 
}

alert(`${a} ${todo} ${b} = ${result}`);
