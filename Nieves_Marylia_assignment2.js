var myBudget; //Declaration of numeric variable
var procedureFunc;

procedureFunc=function(myBudget){ //Procedure without any return.
if (myBudget<25000){ 
    console.log("This car is too expensive!! I cant afford it"); //Output if condition is met.
}
else {
    console.log("This is within my budget but I am not sure about the color"); //Output if condition is not met.
    }
};




procedureFunc(20000); //Calling the procedure with one argument.
