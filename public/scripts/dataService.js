app.service('dataService', function($http, $q){
  var deferred = $q.defer();

  this.getAllRecipes = function(){
    return $http.get('/api/recipes');
  }

  this.getAllCategories = function(){
    return $http.get('/api/categories');
  }

  this.getfoodItems = function(){
    return $http.get('/api/fooditems');
  }
});
