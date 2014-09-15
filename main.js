var numberOfVictims = prompt("How many disaster victims are you entering?");

var victimNameArray = [];

var victimPhoneArray = [];

var victimStreetArray = [];

for(var i = 0; i<numberOfVictims; i++) {
	
	// Victim Name
	var victimName = prompt("What's the victim's name?");
	console.log("victimName:", victimName);
	victimNameArray.push(victimName);
	console.log("victimNameArray:", victimNameArray);
	
	// Victim Phone
	var victimPhone = prompt("What's the victim's phone number?");
	console.log("victimPhone:", victimPhone);
	victimPhoneArray.push(victimPhone);
	console.log("victimPhoneArray", victimPhoneArray);
	
	// Victim Street
	var victimStreet = prompt("What street does the victim live on?");
	console.log("victimStreet:", victimStreet);
	victimStreetArray.push(victimStreet);
	console.log("victimStreetArray:", victimStreetArray);

};

