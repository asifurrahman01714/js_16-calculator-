
function addition(x,y){
    var result=x+y;
    document.write("sum= " + result + "<br/>");
}
function subtraction(x,y){
    var result=x-y;
    document.write("subtraction= " + result + "<br/>");
}
function multplication(x,y){
    var result=x*y;
    document.write("multiplication= " + result + "<br/>");
}
function division(x,y){
    var result=x/y;
    document.write("division= " + result + "<br/>");
}
function modulus(x,y){
    var result=x%y;
    document.write("modulus= " + result + "<br/>");
}

addition(parseInt( prompt("Enter value of x for sum : ")),parseInt( prompt("Enter value of y for sum: ")));
subtraction(parseInt( prompt("Enter value of x for subtraction : ")),parseInt( prompt("Enter value of y for subtraction: ")));
multplication(parseInt( prompt("Enter value of x for multplication : ")),parseInt( prompt("Enter value of y for multplication: ")));
division(parseInt( prompt("Enter value of x for division : ")),parseInt( prompt("Enter value of y for division: ")));
modulus(parseInt( prompt("Enter value of x for modulus : ")),parseInt( prompt("Enter value of y for modulus: ")));