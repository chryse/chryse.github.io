angular.module("customFilters",[])
.filter("range", function($filter, itemsFiltered) {
	return function(data, page, size) {
		if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
			var start_index = (page - 1) * size;
			if(data.length < start_index) {
				return [];
			}
			else {
				var seperatedResults = $filter("limitTo")(data.splice(start_index),size);
				//return $filter("limitTo")(data.splice(start_index),size);
				return seperatedResults;
			}
		} 
		else
			return data;
	}
})
.filter("pageCount", function() {
	return function(data, size) {
		if(angular.isArray(data)) {
			var result = [];
			for(var i = 0; i < Math.ceil(data.length / size); i++) {
				result.push(i);
			}
			return result;
		} 
		else {
			return data;
		}
	}
});
