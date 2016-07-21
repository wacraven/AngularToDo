"use strict";

let app = angular.module("TodoApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
  when('/items/list', {
    templateUrl: 'partials/itemList.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/itemNew.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/details', {
    templateUrl: 'partials/itemDetails.html',
    controller: 'ItemViewCtrl'
  }).
  otherwise('/items/list');
});