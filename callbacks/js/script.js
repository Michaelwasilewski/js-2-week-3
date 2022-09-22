function exampleFunction () {
    console.log("example function called");
};

function exampleFunctionTwo (){
console.log("Do something crazy")
}
function doSomethingWithCallback(callbackFunction) {
    callbackFunction();
}

doSomethingWithCallback(exampleFunction);

doSomethingWithCallback(exampleFunctionTwo);


function whoIsEatingIceCream(callbackFunction) {
    callbackFunction();
}
function showName(name){
    console.log("CrazyKillaMOOOIKE is eating the icecream")
};

whoIsEatingIceCream(showName);

const values = [5, 10, 15, 20];

function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}

const newValues = values.filter(isBiggerThan10);
console.log(newValues);
// Logs:
// [15, 20]

