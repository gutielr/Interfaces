'use strict';

/**
 * @ngdoc function
 * @name interfacesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the interfacesApp
 */
angular.module('interfacesApp')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.showLogged = function(){
    	return true;
    };

  });
