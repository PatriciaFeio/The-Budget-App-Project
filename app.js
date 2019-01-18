// Data module - budgetController

var budgetController = (function() {
  var x = 23;

  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

// UI module

var UIController = (function() {})();

// Controller module - connects the previous modules

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
