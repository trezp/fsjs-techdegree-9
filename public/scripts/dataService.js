app.service('dataService', function($http){

  this.getAllRecipes = function(){
    return $http.get('/api/recipes');
  }

  this.getAllCategories = function(){
    return $http.get('/api/categories');
  }

  this.getfoodItems = function(){
    return $http.get('/api/fooditems');
  }

  this.getRecipeByCat = function(category){
    return $http.get('/api/recipes?category=' + category);
  }

  this.getRecipeById = function(id){
    return $http.get('/api/recipes/' + id);
  }

  this.updateRecipe = function(id){
    return $http.put('api/recipes/' + id);
  }

  this.addRecipe = function(){
    return $http.post('api/recipes');
  }

  this.deleteRecipe = function(id){
    return $http.delete('api/recipes/' + id);
  }
});
