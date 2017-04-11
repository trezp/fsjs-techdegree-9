app.controller('RecipesController', function($scope, dataService){
  dataService.getAllRecipes().then(function(response){
    $scope.recipes = response;
    console.log($scope.recipes)
  }, function(error){
    console.log(error.statusText);
  });

  dataService.getAllCategories().then(function(response){
    $scope.categories = response;
    console.log($scope.categories)
  }, function(error){
    console.log(error.statusText);
  });
});
