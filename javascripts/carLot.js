// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function (globalScopeCarLot) {
  console.log("this function is running")
  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null, {
    loadInventory: function (callback) {
      var load = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
        load.addEventListener("load", function (){})
        load.addEventListener("error", XHRFail);
        load.open("GET", "inventory.json")
        load.send()
      });
    }
  });

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});


function setArr() {

  // set array to equal the parsed json file so it's not displayed like a straight JSON file 
  array = JSON.parse(this.responseText)

  // calls outputCards function and passes array into the function
  outputCards(array)
};
















