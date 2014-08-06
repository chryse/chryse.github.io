var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', { 
		templateUrl: 'partials/list.html', 
		controller: 'ListController'
	}).
	/*
	when('/details/:itemId', {
		templateUrl: 'partials/detail.html',
		controller: 'DetailsController'
	}).
	*/
	otherwise({ 
		redirectTo: '/list' 
	});
}]);