"use strict";

let app = angular.module("TodoApp", ['ngRoute'])
.constant('FirebaseURL', 'https://angular-todo-9facf.firebaseio.com/');

app.config(function($routeProvider, FBCreds) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  }
  firebase.initializeApp(authConfig);

  $routeProvider.
  when('/items/list', {
    templateUrl: 'partials/itemList.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/itemNew.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/details/:itemId', {
    templateUrl: 'partials/itemDetails.html',
    controller: 'ItemViewCtrl'
  }).
  otherwise('/items/list');
});