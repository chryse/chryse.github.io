var vApp = angular.module('vmfa', [
	'ngRoute',
	'artpieceControllers'
]);

vApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', { 
		templateUrl: 'partials/list.html', 
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/detail.html',
		controller: 'DetailsController'
	}).
	otherwise({ 
		redirectTo: '/list' 
	});
}]);