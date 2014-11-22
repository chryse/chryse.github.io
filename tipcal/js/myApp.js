angular.module("myApp", ["ngRoute"])
.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when("/home", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/main", {
		templateUrl: "views/main.html",
		controller: "mainCtrl"
	})
	.otherwise({
		redirectTo: "/home"
	});
}])
.directive("evalTaxTip", function($parse) {
			var expressionFn = $parse("total | currency");
			return {
				scope: { amount: "=amount", tax: "=tax", tip: "=tip" },
				link: function(scope, element, attrs) {
					scope.$watch("amount", function(newValue) {
						var localData = { total: Number(newValue) + (Number(newValue) * Number(scope.tip) / 100) + Number(newValue) * Number(scope.tax) / 100 };
						element.text(expressionFn(scope, localData));
					});
					scope.$watch("tip", function(newValue) {
						var localData = { total: Number(scope.amount) + (Number(scope.amount) * Number(newValue) / 100) + Number(scope.amount) * Number(scope.tax) / 100 };
						element.text(expressionFn(scope, localData));
					});
					scope.$watch("tax", function(newValue) {
						var localData = { total: Number(scope.amount) + (Number(scope.amount) * Number(scope.tip) / 100) + Number(scope.amount) * Number(newValue) / 100 };
						element.text(expressionFn(scope, localData));
					});
				}
			};
		})
.directive("evalTaxCost", function($parse) {
	var expressionFn = $parse("taxCost | currency");
	return {
		scope: { amount: "=amount", tax: "=tax" },
		link: function(scope, element, attrs) {
			scope.$watch("tax", function(newValue) {
				var localData = { taxCost: Number(scope.amount) * Number(newValue) / 100 }
				element.text(expressionFn(scope, localData));
			});
			scope.$watch("amount", function(newValue) {
				var localData = { taxCost: Number(newValue) * Number(scope.tax) / 100 }
				element.text(expressionFn(scope, localData));
			});
		}
	}
})
.directive("evalTipCost", function($parse) {
	var expressionFn = $parse("tipCost | currency");
	return {
		scope: { amount: "=amount", tip: "=tip" },
		link: function(scope, element, attrs) {
			scope.$watch("tip", function(newValue) {
				var localData = { tipCost: Number(scope.amount) * Number(newValue) / 100 }
				element.text(expressionFn(scope, localData));
			});
			scope.$watch("amount", function(newValue) {
				var localData = { tipCost: Number(newValue) * Number(scope.tip) / 100 }
				element.text(expressionFn(scope, localData));
			});
		}
	}
})
.controller("homeCtrl", function($scope) {
	console.log("working");
})
.controller("mainCtrl", function($scope) {
	// $scope.tipGroup = ["5", "10", "15", "20", "25", "30"];
	$scope.tipGroup = [
		{tiprate: "5%", tip: 5},
		{tiprate: "10%", tip: 10},
		{tiprate: "15%", tip: 15},
		{tiprate: "20%", tip: 20},
		{tiprate: "25%", tip: 25},
		{tiprate: "30%", tip: 30}
	]
	$scope.price = "";
	$scope.tax = "";
	$scope.tip = "";
})