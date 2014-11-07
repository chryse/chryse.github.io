angular.module('vmfa', ['ngRoute', 'artpiecesCtrls'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'views/list.html',
		controller: 'listCtrl'
	});

	$routeProvider.when('/details/:itemId', {
		templateUrl: 'views/detail.html',
		controller: 'detailsCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/list'
	});
}]);
