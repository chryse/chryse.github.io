angular.module('myControllers', [])

.controller('ListController', function($scope, $http) {

	$http.get('data/data.json').success(function(data) {
		$scope.myitems = data;
		$scope.myitemOrder = 'course_title';
	});
});

/*
artpieceControllers.controller('DetailsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$http.get('data/data.json').success(function(data) {
		$scope.artpieces = data;
		$scope.whichItem = $routeParams.itemId;
		
		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId) -1;
		}
		else {
			$scope.prevItem = $scope.artpieces.length -1;
		}
		
		if ($routeParams.itemId < $scope.artpieces.length -1) {
			$scope.nextItem = Number($routeParams.itemId) +1;
		}
		else {
			$scope.nextItem = 0;
		}
		
	});
	
}]);
*/