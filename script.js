// ET = 3h
// AT ~ 2h 10min

let cells = [],
	oldCells = [];

function generateArea(column, line, node) {
	let elem = node || document.body;
	let container = document.createElement('div');
	container.className = 'container';
	container.style = `width: ${column * 25}px`;
	elem.appendChild(container);

	for (let i = 1; i <= column*line; i++) {
		let newCell = document.createElement('div');
		newCell.className = 'cell';
		newCell.style.background = 'white';

		container.appendChild(newCell);

		cells[i-1] = newCell;

		newCell.addEventListener('click', function() {	
			if (this.style.background == 'white') {
				this.style.background = 'black';
			} else {
				this.style.background = 'white';
			}
		});
	}

	let clear = document.createElement('button'),
		restore = document.createElement('button');

	restore.className = 'btn btn-secondary';
	clear.className = 'btn btn-primary';

	clear.innerText = 'Clear';
	restore.innerText = 'Restore';

	container.appendChild(clear);
	container.appendChild(restore);

	document.querySelector('.btn-primary').addEventListener('click', function() {
		for (let i = 0; i < cells.length; i++) {
			oldCells[i] = {
				background: cells[i].style.background
			}
			cells[i].style.background = 'white';
		}
	});

	document.querySelector('.btn-secondary').addEventListener('click', function() {
		for (let i = 0; i < cells.length; i++) {
			cells[i].style.background = oldCells[i].background;
		}
	});
}

generateArea(20, 20);