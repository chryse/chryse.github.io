angular.module('artpiecesCtrls', ['ngAnimate'])

.service("itemsFiltered", function() {
	this.results = new Array();
})

.controller('listCtrl', ['$scope', '$http', 'itemsFiltered', function($scope, $http, itemsFiltered) {
	
	$http.get('data/data.json').success(function(data) {
		$scope.artpieces = data;
		//$scope.artpieceOrder = 'name';
		$scope.query = "impressionism";
	});
	$scope.getData = function() {
		itemsFiltered.results = $scope.results;
	}
}])

.controller('detailsCtrl', ['$scope', '$routeParams', 'itemsFiltered', function($scope, $routeParams, itemsFiltered) {
	
	$scope.artpieces = itemsFiltered.results;
	$scope.whichItem = $routeParams.itemId;
	$scope.currentItemNumber = Number($scope.whichItem) + 1;

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
