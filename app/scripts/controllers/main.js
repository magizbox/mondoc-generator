'use strict';

angular.module('docsGeneratorApp')
  .controller('MainCtrl', function ($scope) {

     $scope.currentFunction = 
   {"name":"each","code":"_.each([1, 2, 3], alert);\n=> alerts each number in turn...\n_.each({one: 1, two: 2, three: 3}, alert);\n=> alerts each number value in turn...","signature":"_.each(list, iterator, [context])","description":"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining."};
      $scope.toJSON = function(object){
         return JSON.stringify(object);
      }
      $scope.functionInText = '{"name": "kaka"}';
      $scope.reloadCurrentFunction = function(){
         try{
            console.log(this.functionInText);
            var parsedObject = JSON.parse(this.functionInText);
            $scope.currentFunction = parsedObject;
         } catch(e){
            console.log(e);
         };
      }
  });
