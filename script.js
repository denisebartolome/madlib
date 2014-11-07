/*a function for loop that gets words from HTML form into an array
	getElementById from HTML form into an array
	gets called in HTML to gather words  */
function getWords() {
	var inputs = document.getElementById('form1');
	var words = [];
	var i;
	for(i=0; i < inputs.length; i++){
		words[words.length] = inputs.elements[i].value;

	}

/*Randomly Generated Quotes!*/	
var braveHeart="...That they may take our " + words[0] + ", but they will never take our freedom.";	
var piratesCarribean = "Why is the "+ words[0] +" always gone?";
var tropicThunder = "I know who I am! I'm a " + words[0] + " playing a " + words[0]+ " disguised as another " + words[0] + "!";
var findingNemo = words[0] + " are " + words[1] +", not food.";
var theGodfather= "I'm going to make him an " + words[0] + " he can't refuse.";
var sixthSense = "I see " + words[0] + " people.";
var forrestGump = "My Mama always said, '" + words[0] + " was like a box of " + words[1] +"; you never know what you're gonna get.";
var tenThingsIHateAboutYou = "Don’t let anyone ever make you feel like you don’t deserve " + words[0];
var harryPotter = words[0] + " can be found even in the darkest of times, if one only remembers to turn on the " + words[1];
var starWars = "May the " + words[0] + " be with you."

var quote_number = Math.floor((Math.random() * 10));
var quote_array = [braveHeart, piratesCarribean, tropicThunder, findingNemo, theGodfather, sixthSense, forrestGump, tenThingsIHateAboutYou, harryPotter, starWars];


	document.getElementById("display_screen").innerHTML = quote_array[quote_number];
}


/*a function for displaying the text with words from array*/


