// Data module - BUDGET CONTROLLER

var budgetController = (function() {})();

// UI module - UI CONTROLLER

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// Controller module - GLOBAL APP CONTROLLER
// Connects the previous modules

var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      // for more older browsers use which instead of keyCode
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // 1. Get the field input data

    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };
})(budgetController, UIController);
