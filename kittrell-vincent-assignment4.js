//SDI-Project4
//Vincent Kittrell
//Term 1405

//String Problem 1: Phone number

var usrInput = prompt("Please enter a number in the xxx-xxx-xxxx format below: ");

//Phone number format checker --String function:
var chck = function(usrInput)
{

  if(usrInput.charAt(3) !== "-" || usrInput.charAt(7) !== "-"){
    return false;
  }
  else{
    return true;
  }

};

var chcking = chck (usrInput);

console.log(chcking);