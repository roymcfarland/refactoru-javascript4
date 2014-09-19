var numberOfVictims = prompt("How many disaster victims are you entering?");
var victimNameArray = [];
var victimPhoneArray = [];
var victimStreetArray = [];
var numberOfVolunteers = prompt("How many disaster volunteers are you entering?");
var volunteerNameArray = [];
var volunteerPhoneArray = [];
var volunteerStreetArray = [];

for(var i = 0; i<numberOfVictims; i++) {
	
	// Victim Name
	var victimName = prompt("What's the victim's name?");
	victimNameArray.push(victimName);
	
	// Victim Phone
	var victimPhone = prompt("What's the victim's phone number?");
	victimPhoneArray.push(victimPhone);
	
	// Victim Street
	var victimStreet = prompt("What street does the victim live on?");
	victimStreetArray.push(victimStreet);

};

for(var i = 0; i<numberOfVolunteers; i++) {
	
	// Volunteer Name
	var volunteerName = prompt("What's the volunteer's name?");
	volunteerNameArray.push(volunteerName);
	
	// Volunteer Phone
	var volunteerPhone = prompt("What's the volunteer's phone number?");
	volunteerPhoneArray.push(volunteerPhone);
	
	// Volunteer Street
	var volunteerStreet = prompt("What street does the volunteer live on?");
	volunteerStreetArray.push(volunteerStreet);

};


alert("There are " + numberOfVictims + " victims, and there are " + numberOfVolunteers + " volunteers." + "\n"+ "The victims names are " + victimNameArray + " and the volunteers names are " + volunteerNameArray + ".");









