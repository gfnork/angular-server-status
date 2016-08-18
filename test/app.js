var app = angular.module("myShoppingList", ['angular-server-status']);

app.controller("myCtrl", function ($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function () {
    $scope.products.push($scope.addMe);
  }
});