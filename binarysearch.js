//save file as binarysearch.js
//to run type node binary search.js
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length -1;
  var guess;
  var i = 1;
  
    while(min <= max) {
		guess = Math.floor((max + min) /2);
		if(array[guess] === targetValue) {
			console.log("Total guesses" +i);
			return guess;
		}
		else if(array[guess] < targetValue) {
			min = guess +1;
		}
		else {
			 max = guess -1;
		}
		i++
		console.log("Guess" + guess);
	}
		return -1;
}
//main (this is where the functions get called)

var values = [100,400,200,1000,4,2,3,4,1];
console.log("Before Search");
console.log(values);
values.sort(function(a, b) {return a-b});
//values.sort();


  console.log("After Search");
  console.log(values);
  var searchValue = 200;
  var result = doSearch(values, searchValue);
  console.log("Found value " +searchValue+" at index " + result);
