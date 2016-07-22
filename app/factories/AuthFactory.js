"use strict";

app.factory('AuthFactory', function() {

	let currentUserId = null;
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log("User logged in:", user.uid);
			currentUserId = user.uid;
		} else {
			console.log("No user logged in");
		};
	});

	let AuthWithProvider = function() {
		return firebase.auth().signInWithPopup(provider); //returns promise
	}

	let isAuthenticated = function() {
		return (currentUserId) ? true : false;
	}

	let getUser = function() {
		return currentUserId;
	}

	return {AuthWithProvider, isAuthenticated, getUser}

})

