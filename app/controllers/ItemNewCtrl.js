"use strict";

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location) {
	
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: ""
	};
    
    $scope.addNewItem = function() {
    	console.log($scope.newTask);
    	ItemStorage.postNewItem($scope.newTask)
    	.then(function() {
    		$location.url('/items/list');
    	});
    };
});