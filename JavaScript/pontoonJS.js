// Alex Duthie / 12010280 - Inverness College, UHI (NQ Level 6 Computing)

//	Computer score always set to 18
var compHand = 18;

//	Users score will be determined randomly using math random
var userHand = [];

//	Loop two times
for(i = 0; i < 2; i++)
{	
	//	Random number between 1 and 10 assigned to the variable "card"
	var card = Math.round(Math.random() * 10) + 1;
	//	The card value will be added to the end of the userHand array twice
	userHand.push(card);
}

//	Display userHand array on screen
document.getElementById("userHand").innerHTML = userHand;

function hitMe()
{
	var card = Math.round(Math.random() * 10) + 1;
	userHand.push(card);
	//	Add card value to end of userHand array once this function is called
	
	//	If there are more than 5 values within the userHand array
	//	This will prevent any more than 5 numbers appearing on screen
	if(userHand.length > 5)
	{
		//	Delete last array item in userHand array if more than 5 items exist
		userHand.splice(-1);
		//	Call stick() function
		stick();
	}

	//	Display new userHand array
	document.getElementById("userHand").innerHTML = userHand;
	
}

function sum(total, userCards)
{
	//	This is part of a reduce method
	//	Total and userCards are the two reduce functions
	//	See stick() function for more
	return(total + userCards);
}

function stick()
{
	//	This variable is using the reduce method
	//	.reduce() is calling sum
	//	When called, it reads the two functions (arguments)
	//	It then reduces all array items to one value
	//	It does this by first adding all values together
	var userScore = userHand.reduce(sum);

	document.getElementById("userScore").innerHTML = "Your score is " + userScore;
	document.getElementById("compScore").innerHTML = "Computer Score is " + compHand;

	//	If the userScore is between 18 and 21
	if(userScore > 18 && userScore <= 21)
	{
		//	Open the WIN page
		window.open("Results/winPage.html");
	//	If the userScore is under 18 or over 21
	} else if(userScore < 18 || userScore > 21)
	{
		//	Open the LOSE page
		window.open("Results/losePage.html");
	//	If the userScore is 18
	} else
	{
		// 	Open the DRAW page
		window.open("Results/drawPage.html");
	}

}

/*

	tie img https://www.pexels.com/photo/black-and-white-people-bar-men-4417/

	lose img https://www.pexels.com/photo/monochrome-photo-of-man-covering-his-face-1556716/

	win img https://www.pexels.com/photo/abstract-bay-boats-bright-534031/

	tie audio https://freesound.org/people/SamsterBirdies/sounds/398979/

	lose audio https://freesound.org/people/jealoussiblingprison/sounds/367738/

	win audio https://freesound.org/people/Johanneskristjansson/sounds/371339/

*/