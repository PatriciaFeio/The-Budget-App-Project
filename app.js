// Data module - BUDGET CONTROLLER

var budgetController = (function() {})();

// UI module - UI CONTROLLER

var UIController = (function() {})();

// Controller module - GLOBAL APP CONTROLLER
// Connects the previous modules

var controller = (function(budgetCtrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. Get the filed input data
    // 2. Add item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  });
})(budgetController, UIController);
