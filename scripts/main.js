let seconds = 0;
let hungerSeconds = 0;
let boredomSeconds = 0;
let sleepySeconds = 0;
let level = 0;
let hunger = 1;
let boredom = 1;
let sleepiness = 1;

const newGame = () => {
	setTimer();
	setHunger();
	setBoredom();
	setSleepiness();
}

const setTimer = () => {
	const timer = setInterval(() => {
		
		seconds++
		if (seconds % 1 === 0) {
			level++;
		}		
		if (level >= 16) {
			$('#pokemon').attr('src', 'https://media.giphy.com/media/jkPFU04cxHiak/giphy.gif')
		}

		if (level >= 32) {
			$('#pokemon').attr('src', 'https://media.giphy.com/media/13FOVVEFomW5S8/giphy.gif')
		}
		
		$('#levelIncrease').text(`LEVEL ${level}`)
	}, 1000)
}

const setHunger = () => {
	const timer = setInterval(() => {
		hungerSeconds++
		if (hungerSeconds % 5 === 0) {
			hunger++;
		}
		if (hunger === 10) {
			clearInterval(timer)
			alert('Your pokemon died of hunger. Refresh page to start over!')
		}
		$('#butFeed').on('click', () => {
			hunger = 1;
		})
		
		$('#feed').text(`HUNGER: ${hunger}`)
	}, 1000)
}

const setBoredom = () => {
	const timer = setInterval(() => {
		boredomSeconds++
		if (boredomSeconds % 4 === 0) {
			boredom++;
		}
		if (boredom === 10) {
			clearInterval(timer)
			alert('Your pokemon died of boredom. Refresh page to start over!')
		}
		$('#butPlay').on('click', () => {
			boredom = 1;
		})
		
		$('#play').text(`BOREDOM: ${boredom}`)
	}, 1000)
}

const setSleepiness = () => {
	const timer = setInterval(() => {
		sleepySeconds++
		if (sleepySeconds % 6 === 0) {
			sleepiness++;
		}
		if (sleepiness === 10) {
			clearInterval(timer)
			alert('Your pokemon died of sleepiness. Refresh page to start over!')
		}
		$('#butSleep').on('click', () => {
			sleepiness = 1;
		})
		$('#sleep').text(`SLEEPY: ${sleepiness}`)
	}, 1000)
}

newGame();














