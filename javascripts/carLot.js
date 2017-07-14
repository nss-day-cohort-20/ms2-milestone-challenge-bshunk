// sets variable carLot to equal an IIFE function while expecting globalScopeCarLot to be passed in from main.js
var carLot = (function (globalScopeCarLot) {

  console.log("this is running");
  // creates variables to hold elements from HTML
  let container = document.getElementsByClassName("container");
  let input = document.getElementById("input");
  let cars = "";
  let card = [];
  let _car_inventory = [];  

  // defines function carArray
  function carArray() {
    console.log("this is also running");
    // set array to equal the parsed JSON file
    _car_inventory = JSON.parse(this.responseText);
  };  
  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
    let inventory = Object.create(null, {

      loadInventory: function (callback) {

        var load = new XMLHttpRequest();

        inventoryLoader.addEventListener("load", function () {

          // Add each car to the private _car_inventory array
          load.addEventListener("load", carArray);
          load.open("GET", "inventory.json")
          load.send()
        })
      }
    })
  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(carLot || {});



