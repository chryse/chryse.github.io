angular.module('vmfa', ['ngRoute', 'artpiecesCtrls', 'customFilters'])

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
}])

//For Global Access
.constant("artListPageCount", 20)
.service("itemsFiltered", function() {
	this.results = new Array();
	this.query = "";
	this.listOrder = "";
	this.direction = "";
})
