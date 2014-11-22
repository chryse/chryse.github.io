// var main = {};
//load all js files
window.addEventListener("load", function() {
	Modernizr.load([
		{
			load: ["libs/angular.min.js", "libs/angular-route.min.js", "js/myApp.js"],
			complete: function() {
				console.log("Complete loading");

			}
		}
	]);
}, false);