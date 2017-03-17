//randomInCreate.js
//binary random Integer 
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function(val) {
	var ival = Math.random()*26+97;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main
var i, rInt ;
var letter = '';

for (i = 0; i < 65536; i++){
	rInt = randomInteger();
	if (rInt === 97);
	letter = String.fromCharCode(rInt);
process.stdout.write(letter);

}
console.log(letter);
