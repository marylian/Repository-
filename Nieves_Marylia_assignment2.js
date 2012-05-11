var myBudget; //Declaration of numeric variable
var procedureFunc;
var vehicleMake; //Declaration of string variable
var gasMileage; //Declaration of numeric variable
var carServiced=0;
var mileService;

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

numberFunc=function(carServiced){ //Number function
        var mileLimit=20000;     //Local variable for the number function.
        while (carServiced<mileLimit) { //while loop
            carServiced+=5000; // This math will be executed for the number of times the condition is met.
            console.log ("We recommend you service your car at "+carServiced+" miles"); //Output from the math.
        }
        mileService=20000;
        return (mileService); //When the condition is not met, number is returned.
};


procedureFunc(20000); //Calling the procedure with one argument.
booleanFunc("Hyundai", 39); //Calling boolean function with 2 arguments.
if (booleanValue==true){
    console.log("I cant believe they make such good cars");
}
else{
    console.log("I would still like to see a Hyundai");
} //End boolean function.
numberFunc(0);{ //Number function with a number as an argument.
    console.log ("However, please do keep in mind that we will be providing you with a free service for "+mileService);
}
