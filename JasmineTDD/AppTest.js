
/// <reference path="Scripts/jasmine/jasmine.js" />
/// <reference path="Scripts/angular.js" />
/// <reference path="Scripts/angular-mocks.js" />
/// <reference path="App.js" />

describe("Test Hello world", function () {

	it("should return hello world", function() {
		expect(helloWorld()).toEqual("Hello World");
	});
});

describe("Test Angular Hello World", function () {
	var scope;
	var controller;
	var httpBackend;
	beforeEach(module("angularModule"));
	
	beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
		httpBackend = $httpBackend;
		$httpBackend.expectGET("/userName").respond("Sankalpa");
		scope = $rootScope.$new();
		controller = $controller("angularController", { $scope: scope });
		$httpBackend.flush();
	}));
	
	it("Should return hello world", function() {
		expect(scope.message).toEqual("Hello World");
	});

	it("Should get user name from server", function() {
		expect(scope.userName).toEqual("Sankalpa");
	});
	
	it("Should get user address from server", function () {
		httpBackend.expectGET("/address").respond("Horana");
		scope.getAddress();
		httpBackend.flush();
		
		expect(scope.Address).toEqual("Horana");
	});

	it("Should save user", function () {
		var user = {id:1, name:'test'};
		httpBackend.expectPOST("/addUser", user).respond(200);
		scope.saveUser(user);
		httpBackend.flush();
		
		
	});
});