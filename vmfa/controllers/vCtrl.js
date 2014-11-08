angular.module('artpiecesCtrls', ['ngAnimate'])

//For Global Access
.service("itemsFiltered", function() {
	this.results = new Array();
	this.query = "";
	this.listOrder = "";
	this.direction = "";
})

.controller('listCtrl', ['$scope', '$http', 'itemsFiltered', function($scope, $http, itemsFiltered) {

	$http.get('data/data.json').success(function(data) {
		$scope.artpieces = data;
		$scope.artpieceOrder = itemsFiltered.query;
	});

	$scope.query = itemsFiltered.query;
	$scope.listOrder = itemsFiltered.listOrder;
	$scope.direction = itemsFiltered.direction;

	$scope.getData = function() {
		itemsFiltered.results = $scope.results;
		itemsFiltered.query = $scope.query;
		itemsFiltered.listOrder = $scope.listOrder;
		itemsFiltered.direction = $scope.direction;
	}
}])

.controller('detailsCtrl', ['$scope', '$routeParams', 'itemsFiltered', function($scope, $routeParams, itemsFiltered) {

	$scope.artpieces = itemsFiltered.results;
	$scope.whichItem = $routeParams.itemId;
	$scope.currentItemNumber = Number($scope.whichItem) +1;

	if ($routeParams.itemId > 0 ) {
		$scope.prevItem = Number($routeParams.itemId -1);
	}
	else {
		$scope.prevItem = $scope.artpieces.length -1;
	}

	if ($routeParams.itemId < $scope.artpieces.length -1 ) {
		$scope.nextItem = Number($routeParams.itemId) +1;
	}
	else {
		$scope.nextItem = 0;
	}

}]);
