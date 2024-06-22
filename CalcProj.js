
const display = document.getElementById("display");

// functions to enter in
function appendToDisplay(input){
    display.value += input;
}


//function to clear
function clearDisplay (c) {
    display.value ="";
}

//function to get total 
function calculate() {
    //try code can caught an errors within
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}