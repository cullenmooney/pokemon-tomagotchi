let seconds = 0;
let minutes = 0;
let hours = 0;


class Pokemon {
	constructor(name, appearance) {
		this.name = name;
		this.appearance = appearance;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
	}
}


const Squirtle = new Pokemon('Squirtle', 'small')
const Warturtle = new Pokemon('Warturle', 'medium')
const Blastoise = new Pokemon('Blastoise', 'large')

const setTimer = () => {
	const timer = setInterval(() => {
		seconds++
		if (seconds === 60) {
			seconds = 0;
		}

		if (seconds % 60 === 0) {
			minutes++
		}
		if (minutes === 60 || minutes === 120) {
			hours++
		}
		
		$('#timeElapsed').text(`TIME ELAPSED: ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
	}, 1000)
}

setTimer();





