/*a function for loop that gets words from HTML form into an array
	getElementById from HTML form into an array
	gets called in HTML to gather words  */
function getWords() {

	var node=document.createElement("input");
	var textnode = document.createTextNode("");
	node.appendChild(textnode);
	document.getElementById("form1").appendChild(node);

	var inputs = document.getElementById('form1');
	var words = [];
	var i;
	for(i=0; i < inputs.length; i++){
		words[words.length] = inputs.elements[i].value;
	}

var braveHeart= {quote: "...That they may take our " + words[0] + ", but they will never take our freedom.", fill: 1};
var piratesCarribean = {quote:"Why is the "+ words[0] +" always gone?", fill: 1};
var tropicThunder ={quote: "I know who I am! I'm a " + words[0] + " playing a " + words[0]+ " disguised as another " + words[0] + "!", fill: 1};
var findingNemo = {quote: words[0] + " are " + words[1] +", not food.", fill: 2};
var theGodfather= {quote: "I'm going to make him an " + words[0] + " he can't refuse.", fill: 1};
var sixthSense = {quote: "I see " + words[0] + " people.", fill: 1};
var forrestGump = {quote: "My Mama always said, '" + words[0] + " was like a box of " + words[1] +"; you never know what you're gonna get.", fill: 2};
var tenThingsIHateAboutYou = {quote:"Don’t let anyone ever make you feel like you don’t deserve " + words[0], fill: 1};
var harryPotter = {quote: words[0] + " can be found even in the darkest of times, if one only remembers to turn on the " + words[1], fill: 2};
var starWars = {quote: "May the " + words[0] + " be with you.", fill: 1};


var quote_array = [braveHeart, piratesCarribean, tropicThunder, findingNemo, theGodfather, sixthSense, forrestGump, tenThingsIHateAboutYou, harryPotter, starWars];
var quote_number = Math.floor((Math.random() * 10));

document.getElementById("display_screen").innerHTML = quote_array[quote_number].quote;
	}




