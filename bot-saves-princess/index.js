// Bot Saves Princess - saveprincess

function displayPathtoPrincess(dimension, grid) {
	const obj = {
		bot: [0, 0],
		princess: [0, 0]
	}

	for (let index = 0; index < dimension; index++) {
		for (let i = 0; i < dimension; i++) {
			if (grid[index][i] === 'm') { // Bot
				obj.bot = [index, i]
			} else if (grid[index][i] === 'p') { // Princess
				obj.princess = [index, i]
			}
		}
	}

	while (true) {
		if (obj.bot[0] > obj.princess[0]) {
			obj.bot[0]--
			console.log('UP')
		} else if (obj.bot[1] < obj.princess[1]) {
			obj.bot[1]++
			console.log('RIGHT')
		} else if (obj.bot[0] < obj.princess[0]) {
			obj.bot[0]++
			console.log('DOWN')
		} else if (obj.bot[1] > obj.princess[1]) {
			obj.bot[1]--
			console.log('LEFT')
		} else {
			break
		}
	}
}

displayPathtoPrincess(3, ['---', '-m-', 'p--'])