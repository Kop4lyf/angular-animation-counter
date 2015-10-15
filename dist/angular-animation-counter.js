angular.module('angular-animation-counter', [])
.directive('incDecCounter', function(){

	//a function to convert the value to locale
	function generateLocale(value, locale){
		if(locale && Number.toLocaleString){
			return (+value).toLocaleString(locale);
		} else {
			return value;
		}
	}

	return {
		restrict : 'A',
		scope : {
			value : "@",
			interval : "@",
			locale : "@"
		},
		link: function($scope, element, attrs){
			
			element.html($scope.value);
			$scope.$watch('value', function(newVal, oldVal) {

				newVal = (newVal || 0);
				oldVal = (oldVal || 0);
			
				if(+newVal !== +oldVal){
					setCounter(oldVal, newVal);
				}
			});

			//function to run counter from start to end
			function setCounter(start, end){
				if(start == end){
					return;
				}
				//get steps for interval and the divisions so that we can complete the animations in that interval
				var steps = 20; //get steps or defaults to 20
				var divisions = (($scope.interval || 1)*1000)/steps; //divide the number to get divisions for change interval
				var locale = $scope.locale;

				//SETTING the values of counter to run between difference
				var diff = end - start, counter = start, incr = (end-start>0);
				var interval = diff/divisions;

				//this is so that form minor differences, the counter should not run unnecessarily
				interval = Math.abs(interval)>1 ? interval : (interval>0 ? 1 : -1);

				var intFunc = setInterval(function(){

					//when the counter goes beyond range, clearing the interval
					if((incr && counter >= end) || (!incr && counter <= end)){
						element.html(generateLocale(end, locale));
						clearInterval(intFunc);
						return;
					}
					element.html(generateLocale(Math.round(+counter), locale)); //showing the round off value in the interim
					counter = ((+counter) + (+interval)); //adding + before variable converts it to number
				}, steps);
			}
		}
	};
});
