let todo = prompt("What do you want to do: add, sub, mult, div?"); 

let a = +prompt("enter first number: ");
let b = +prompt("enter second number: ");
let result;

if(isNaN(a)|| isNaN(b)){
  alert("Error: Please enter valid numbers");
}

if(todo === 'add') {
 result = a + b; 

}else if(todo === 'sub') {
  result = a - b;

}else if(todo === 'mult') {
  result = a * b; 

}else if(todo === 'div') {
  if(b !== 0) {
    result = a / b;
  }else{
    result="Error: Divison by zero";
  }
}else{
  result="Unexpected operation";
}

alert(result); 

