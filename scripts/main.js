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

		if ($('#feed').text() === ('HUNGER: 10')) {
			clearInterval(timer);
			$('#pokemon').attr('src', 'https://media.giphy.com/media/Z5E4gRu8p2nK/giphy.gif')

		}

		if ($('#play').text() === ('BOREDOM: 10')) {
			clearInterval(timer);
			$('#pokemon').attr('src', 'https://media.giphy.com/media/Z5E4gRu8p2nK/giphy.gif')
		}

		if ($('#sleep').text() === ('SLEEPY: 10')) {
			clearInterval(timer);
			$('#pokemon').attr('src', 'https://media.giphy.com/media/Z5E4gRu8p2nK/giphy.gif')
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

		if ($('#play').text() === ('BOREDOM: 10')) {
			clearInterval(timer);
		}

		if ($('#sleep').text() === ('SLEEPY: 10')) {
			clearInterval(timer);
		}

		if (hunger === 10) {
			clearInterval(timer)
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
		if (boredomSeconds % 2 === 0) {
			boredom++;
		}

		if ($('#feed').text() === ('HUNGER: 10')) {
			clearInterval(timer);
		}

		if ($('#sleep').text() === ('SLEEPY: 10')) {
			clearInterval(timer);
		}

		if (boredom === 10) {
			clearInterval(timer)
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
		if (sleepySeconds % 3 === 0) {
			sleepiness++;
		}

		if ($('#feed').text() === ('HUNGER: 10')) {
			clearInterval(timer);
		}

		if ($('#play').text() === ('BOREDOM: 10')) {
			clearInterval(timer);
		}

		if (sleepiness === 10) {
			clearInterval(timer)
		}
		
		$('#butSleep').on('click', () => {
			sleepiness = 1;
		})
		$('#sleep').text(`SLEEPY: ${sleepiness}`)
	}, 1000)
}

let clicked = 1;

const firstBody = () => {
	$('body').css('background-image', "url('https://i.imgur.com/3TkFymp.png')");
};

const secondBody = () => {
	$('body').css('background-image', "url('images/moonback.jpg')");
};

const nestedFunctionsCauseFuckIt = () => {
	if (clicked === 0){
		firstBody();
		clicked = 1;
	}else if(clicked === 1){
		secondBody();
		clicked = 0;
	}; 
};


$('#butSleep').click(nestedFunctionsCauseFuckIt);

newGame();





