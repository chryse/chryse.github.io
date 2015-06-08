angular.module('artpiecesCtrls', ['ngAnimate'])

.controller('listCtrl', function($scope, $http, itemsFiltered, artListPageCount) {

	$http.get('data/data.json').success(function(data) {
		$scope.artpieces = data;
		$scope.artpieceOrder = itemsFiltered.query;
	})
	.error(function() {
		$scope.dataError = true;
	});


	$scope.query = itemsFiltered.query;
	$scope.listOrder = itemsFiltered.listOrder;
	$scope.direction = itemsFiltered.direction;

	// store filtered daat for next page
	$scope.getData = function() {
		itemsFiltered.results = $scope.results;
		itemsFiltered.query = $scope.query;
		itemsFiltered.listOrder = $scope.listOrder;
		itemsFiltered.direction = $scope.direction;
	};

	// item singular and plural check
	$scope.itemsString = function() {
		if ($scope.results.length === 1) { return "item was"; }
		else { return "items were"; }
	}

	$scope.selectedPage = 1;
	$scope.pageSize = artListPageCount;

	$scope.selectPage = function(newPage) {
		$scope.selectedPage = newPage;
	};
})

.controller('detailsCtrl', function($scope, $routeParams, itemsFiltered) {

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

});
