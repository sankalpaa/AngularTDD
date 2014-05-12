function helloWorld() {
	return "Hello World";
};

var app = angular.module("angularModule",[]);
app.controller("angularController", function ($scope,$http) {
	$scope.message = "Hello World";

	$http.get("/userName").success(function(data) {
		$scope.userName = data;
	});

	$scope.getAddress = function () {
		$http.get("/address").success(function (data) {
			$scope.Address = data;
		});
	};

	$scope.saveUser = function(user) {
		$http.post("/addUser", user).success(function() {

		});
	};
});