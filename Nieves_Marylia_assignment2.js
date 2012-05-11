var myBudget; //Declaration of numeric variable
var procedureFunc;
var vehicleMake; //Declaration of string variable
var gasMileage; //Declaration of numeric variable


procedureFunc=function(myBudget){ //Procedure without any return.
if (myBudget<25000){ 
    console.log("This car is too expensive!! I cant afford it"); //Output if condition is met.
}
else {
    console.log("This is within my budget but I am not sure about the color"); //Output if condition is not met.
    }
};

booleanFunc=function(vehicleMake, gasMileage){ //Boolean function
 console.log("Which car is this and how much is the mileage?");
if (vehicleMake=="Hyundai" && gasMileage>="40"){ //Comparision operation
    console.log("This is a "+vehicleMake+" and it gives "+gasMileage+" MPG"); //Output if condition is met.
    return (booleanValue=true); //Boolean returned back.
}
     else{
         console.log("I would like to see a "+vehicleMake+" first.") //Output if condition is not met.
         return (booleanValue=false); // Boolean returned back.
     }
};



procedureFunc(20000); //Calling the procedure with one argument.
booleanFunc("Hyundai", 39); //Calling boolean function with 2 arguments.
if (booleanValue==true){
    console.log("I cant believe they make such good cars");
}
else{
    console.log("I would still like to see a Hyundai");
} //End boolean function.
