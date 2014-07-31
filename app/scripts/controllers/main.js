'use strict';

angular.module('docsGeneratorApp')

  .controller('MainCtrl', function ($scope, $http) {
     $scope.currentFunction = {"name":"each","code":"_.each([1, 2, 3], alert);\n=> alerts each number in turn...\n_.each({one: 1, two: 2, three: 3}, alert);\n=> alerts each number value in turn...","signature":"_.each(list, iterator, [context])","description":"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining."};
      $scope.toJSON = function(object){
         return JSON.stringify(object);
      }
      
      $scope.functionInText = '{"name": "paste your function here..."}';
     $scope.getYear = function(){
        var now = moment($scope.currentResource.date);
        return now.format("YYYY");
     }
     $scope.getTimeInCiteFormat = function(){
        var now = moment($scope.currentResource.date);
        console.log($scope.currentResource.date);
        return now.format("Do MMM. YYYY");
     }
     var currentDate = Date().toString(); 
     $scope.currentResource = {"author": "rain", title : "Awesome Resource", "date": currentDate, "url": "http://google.com" } 
      $scope.toJSON = function(object){
         return JSON.stringify(object);
      }
     $scope.getYear = function(){
        var now = moment($scope.currentResource.date);
        return now.format("YYYY");
     }
     $scope.getTimeInCiteFormat = function(){
        var now = moment($scope.currentResource.date);
        console.log($scope.currentResource.date);
        return now.format("Do MMM. YYYY");
     }
     var currentDate = Date().toString(); 
     $scope.currentResource = {"author": "rain", title : "Awesome Resource", "date": currentDate, "url": "http://google.com" } 
      $scope.toJSON = function(object){
         return JSON.stringify(object);
      }
      
      $scope.resourceInText = '{"name": "load function..."}';
      $scope.reloadCurrentResource = function(){
         try{
            var parsedObject = JSON.parse(this.resourceInText);
            $scope.currentResource = parsedObject;
         } catch(e){
            console.log(e);
         };
      }
      
      $scope.functionInText = '{"name": "kaka"}';
      $scope.reloadCurrentFunction = function(){
         try{
            var parsedObject = JSON.parse(this.functionInText);
            $scope.currentFunction = parsedObject;
         } catch(e){
            console.log(e);
         };
      }
      
     $scope.getYear = function(){
        var now = moment($scope.currentResource.date);
        return now.format("YYYY");
     }
     $scope.getTimeInCiteFormat = function(){
        var now = moment($scope.currentResource.date);
        console.log($scope.currentResource.date);
        return now.format("Do MMM. YYYY");
     }
     var currentDate = Date().toString(); 
     $scope.currentResource = {"author": "rain", title : "Awesome Resource", "date": currentDate, "url": "http://google.com" } 
      $scope.toJSON = function(object){
         return JSON.stringify(object);
      }
      $scope.resourceInText = '{"name": "load function..."}';
      $scope.reloadCurrentResource = function(){
         try{
            var parsedObject = JSON.parse(this.resourceInText);
            $scope.currentResource = parsedObject;
         } catch(e){
            console.log(e);
         };
      }

      $scope.urlResource = "crawl.json";
      $scope.loadFromURL = function(){
         $http.get($scope.urlResource)
            .success(function(data){
               $scope.currentResource = _.extend($scope.currentResource, data);
            });
      }
  });
