var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController',['$scope', '$http', function($scope, $http) {

	$http.get('data/data.json').success(function(data) {
		$scope.myitems = data;
		$scope.myitemOrder = 'course_title';
	});
	
	
	$('div.vmfa').tinyTips('light', '<strong>V-MFA</strong><br /><p class="desc">This web based flash application is designed for users who are interested in fine arts. All information comes from Museum of Fine Arts and it can categorize art-works based on artists, classifications, artists\’ nationality, styles, types and years. Once it categorizes, the 3D-gallery displays and exhibits the art-works.<br />If the virtual galleries are more than two, toggle buttons on the top of screen are activated to switch each room. In the virtual gallery, any artistic masterpiece is clickable to go through the picture-flow screen that contains whole classified art-works. The picture-flow screen consists of a stack of the classified pictures. Each artistic picture explains about the information of it. The magnifier icon on the left can help users scrutinize the picture.</p>');
}]);

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