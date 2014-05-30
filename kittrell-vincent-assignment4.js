//SDI-Project4
//Vincent Kittrell
//Term 1405

alert("I hope you like to string along.");

//String Problem 1: Phone number

alert("Need to find out if you have a correct phone number.");

var userInput = prompt("Please enter a number in the xxx-xxx-xxxx format below: ");

//Phone number verifier

var veri = function (userInput) {

    if (userInput.charAt(3) !== "-" || userInput.charAt(7) !== "-") {
        alert("Yuck! Can't call you!");
        return false;
    }else{
        alert("Yay! Can I call you? Maybe?");
        return true;
    }

};

var verify = ver(userInput);

console.log(verify);


//String Problem 2: Email Address

//Global variables

var userInput = prompt("You have an email?");

//String

var myemail = function(userInput){
    
    if(userInput.search("@") === -1 || userInput.charAt(userInput.length-4) !== ".") {
        
        alert ("No fan mail for you. :(");
        console.log("I'm so lonely.");
        return false;
        
    }else{
        
        alert ("You've got mail!");
        console.log("Here is your email address, " + userInput + ".");
        return true;
        
		}

};
var myreturn = myemail(userInput);
console.log("Here is your email address, " + userInput + ".");

            

//String Problem 3: Website URL

//Global variable

var userInput = prompt("Do you have a website?");

//Website function
var wscheck = function(userInput){

  var urlProtocol = userInput.substr(0,7);
  var urlSecProtocol = userInput.substr(0,8);

  if(urlProtocol ==="http://" || urlSecProtocol === "https://"){
            alert ("Surfs up,baby!");
            return true;
  }
  else {
      alert("Whoah! Wipe out, bro.");
      return false;
  }

};

var myReturn = wscheck(userInput);

console.log(myReturn);

//String Problem 4: Upper Case the title
//Local variables
var myTitle = "";
var newTitle = "";

//Function
var titleWar = function(strTitle) {
    strTitle = prompt("So what is your title?");
    return strTitle;
};

var titleWon = function(strTitle) {
    var theOld = strTitle;
    var theNew = "";
    var strCakeWalk = "Cake Walk";
    var currentIndex = 0;
    var newIndex = 0;
        
while (theOld.length !=0) {
    if(theOld.indexOf(" ",currentIndex) !=-1) {
        newIndex = theOld.indexOf(" ",currentIndex)
}else{
    newIndex = theOld.length
};
    strCakeWalk = theOld.substring(currentIndex,newIndex);
    theOld = theOld.substring(newIndex+1,theOld.length);
    strCakeWalk = strCakeWalk.toLowerCase();
    strCakeWalk = strCakeWalk.charAt(0).toUpperCase()+strCakeWalk.substring(1);
    theNew = theNew + strCakeWalk + " ";
};
    alert("Old Title: " + strTitle + "\n\nNew Title: " + theNew + "\n ");
    return theNew;
};

myTitle = titleWar(myTitle);
newTitle = titleWon(myTitle);

//Global Variables

//String Problem 5:

alert("01010110101010101011010101010101010101........\nMathman!");

//Number Problem 1:


//Number Problem 2:



//Number Problem 3: Two dates

//Variables
var date = 0

var theDate = function(date) {
    var date1 = prompt("What is your birthday?\n ");
    var date2 = prompt("Enter somebody else's birthday.\n ");
    var date3 = Date();
    var responseType = "Hour";
        
    responseType = prompt("Do you want know how much older or younger you are? You only get to know in days or hours. Mwhahahaha!","days or hours");
    if (responseType === "hours") {
        date3 = ((date2*1)-(date1*1))/3600000;
        date3 = date3.toFixed(2);
        alert("The difference between the two dates is " + date3 + " hours.\n ");
        return date3;
}else if (responseType === "days") {
        date3 = ((date2*1)-(date1*1))/86400000;
        date3 = Math.abs(date3);
        date3 = date3.toFixed(2);
        alert("The difference between the two dates is " + date3 + " days.\n ");
        return date3;
}else{
        alert("Some one isn't listening....Shame shame.");
};

};

dateDiff = theDate();

alert ("Some Dragons shoot their breath in arrays!");

//Array Problem 1:


Array.prototype.minGreaterThan = function(a) {
    var t=this,r=Number.POSITIVE_INFINITY,i;
	for (i=0;i<t.length;i++) 
    if (a<t[i] && t[i]<r) r=t[i];
	return r;
}

var arr=[1,6,12,14],n=5;
alert(arr.minGreaterThan(n));  






//Number Problem 4:




