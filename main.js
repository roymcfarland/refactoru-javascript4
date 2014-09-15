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

var numberOfVolunteers = prompt("How many disaster volunteers are you entering?");

var volunteerNameArray = [];

var volunteerPhoneArray = [];

var volunteerStreetArray = [];

for(var i = 0; i<numberOfVolunteers; i++) {
	
	// volunteer Name
	var volunteerName = prompt("What's the volunteer's name?");
	console.log("volunteerName:", volunteerName);
	volunteerNameArray.push(volunteerName);
	console.log("volunteerNameArray:", volunteerNameArray);
	
	// volunteer Phone
	var volunteerPhone = prompt("What's the volunteer's phone number?");
	console.log("volunteerPhone:", volunteerPhone);
	volunteerPhoneArray.push(volunteerPhone);
	console.log("volunteerPhoneArray", volunteerPhoneArray);
	
	// volunteer Street
	var volunteerStreet = prompt("What street does the volunteer live on?");
	console.log("volunteerStreet:", volunteerStreet);
	volunteerStreetArray.push(volunteerStreet);
	console.log("volunteerStreetArray:", volunteerStreetArray);

};


alert("There are " + numberOfVictims + " victims, and there are " + numberOfVolunteers + " volunteers." + "\n"+ "The victims names are " + victimNameArray + " and the volunteers names are " + volunteerNameArray + ".");









