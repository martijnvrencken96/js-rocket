var sayMyName = function (name) {
	alert('My name is: ' +name)
}


var doCoolStuff =function(){
	// changing class name
	document.getElementById('cool').className = 'cool red';
}

	console.log('hello there');

	var car = {
		make: 'VW',
		type: 'polo',
		color: 'blue',
		isTurnedOn: false,
		numberOfWheels: 4,		
		seats: [
			'seat 1', 
			'seat 2', 
			'seat 3',
			'seat 4'
			],
		turnOn: function () {
			this.isTurnedOn = true;
			},
		fly: function () {
				alert('fly');
			},
		switchCar: function(isOn) {
				console.log ('turn car ' +isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				}
				else {
					this.isTurnedOn = false;
				}
			}
		};	
