//SDI-Project4
//Vincent Kittrell
//Term 1405

//String Problem 1: Phone number

alert ("Need to find out if you have a correct phone number.");

var usrInput = prompt("Please enter a number in the xxx-xxx-xxxx format below: ");

//Phone number format checker --String function:
var chck = function(usrInput)
{

  if(usrInput.charAt(3) !== "-" || usrInput.charAt(7) !== "-"){
    alert ("Yuck! Can't call you!");
      return false;
  }
  else{
    alert ("Yay! Can I call you? Maybe?");
      return true;
  }

};

var chcking = chck (usrInput);

console.log(chcking);


//String Problem 2: Email Address

//Global variables
var usrInput = prompt("Enter an email address in the aaa@bbb.ccc format");

//String
var emailChck = function(usrInput){

		if(usrInput.search("@") === -1 || usrInput.charAt(usrInput.length-4) !== "."){
alert ("You've got mail!");
			return false;
		}
		else{
alert ("No fan mail for you. :(");
			return true;
		}

};
var myReturnVal = emailChck(usrInput);

console.log(myReturnVal);

