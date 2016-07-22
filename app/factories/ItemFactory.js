"use strict";

app.factory('ItemStorage', function(FirebaseURL, $q, $http) {
	// let items = [
		// {
	 //      id: 0,
	 //      task: "mow the lawn",
	 //      isCompleted: true,
	 //      dueDate: "12/5/17",
	 //      assignedTo: "Greg",
	 //      location: "Greg's mom's house",
	 //      urgency: "low",
	 //      dependencies: "sunshine, clippers, hat, water, headphones"
	 //    },
	 //    {
	 //      id: 1,
	 //      task: "grade quizzes",
	 //      isCompleted: false,
	 //      dueDate: "12/5/15",
	 //      assignedTo: "Joe",
	 //      location: "NSS",
	 //      urgency: "high",
	 //      dependencies: "wifi, tissues, vodka"
	 //    },
	 //    {
	 //      id: 2,
	 //      task: "take a nap",
	 //      isCompleted: false,
	 //      dueDate: "5/21/16",
	 //      assignedTo: "Joe",
	 //      location: "Joe's house",
	 //      urgency: "medium",
	 //      dependencies: "hammock, cat, pillow, blanket"
		// }
	// ];

	let getItemList = function() {
		let items = [];
		return $q(function(resolve, reject) { //same as standard ajax promise
			$http.get(`${FirebaseURL}/items.json`)
			.success(function(itemObj) {
				let itemCollection = itemObj;
				Object.keys(itemCollection).forEach(function(key) {
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	let postNewItem = function(newItem) {
		return $q(function(resolve, reject) {
			$http.post(
				`${FirebaseURL}/items.json`,
				JSON.stringify(newItem))
			.success(function(fbObj) {
				resolve(fbObj);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {getItemList, postNewItem};

});

