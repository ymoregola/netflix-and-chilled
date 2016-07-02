"use strict;"

app = angular.module('appName');

app.controller('mainController', function($scope, Beer) {


	$scope.getBeer = () => {

		Beer.getRandomBeer() 
		.then(res => {
			$scope.beers = res;
		})
	}
});


app.controller('matchCtrl', function($scope, Beer, movieService, $stateParams) {
	movieService.getRandom().then((res) => {
			// console.log('movie', res.data);
			$scope.movieObj = res.data;
		});

	Beer.getRandomBeer().then((res) => {
			console.log('beer', res.data);
			$scope.beerObj = res.data;
		})			

})


app.controller('homeCtrl', function($scope, $state, Beer, movieService, $stateParams) {
	let output = {};

	$scope.getMatch = () => {
		movieService.getRandom().then((res) => {
			output.movie = res.data;
			console.log('movie', res.data);
			$state.go('match', {output: output});
		});
	}
	


})