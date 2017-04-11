
const app = angular.module('app', ['ngRoute']).controller('mainController', function($scope, dataService){
  dataService.getAllRecipes().then(function(response){
    $scope.recipes = response;
  }, function(error){
    console.log(error.statusText);
  })
});
