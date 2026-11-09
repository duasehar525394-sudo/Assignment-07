                    
const countercontainer = document.createElement('div');
countercontainer.id = 'counterContainer';

const heading = document.createElement('h1');
heading.textContent = 'My Counter';
countercontainer.appendChild(heading);

const counterDisplay = document.createElement('p');
counterDisplay.id = 'counterDisplay';
counterDisplay.textContent = '0';

countercontainer.appendChild(counterDisplay);

const decreaseButton = document.createElement('button');
const increaseButton = document.createElement('button');
const resetButton = document.createElement('button');

decreaseButton.textContent = '-';
increaseButton.textContent = '+';
resetButton.textContent = 'Reset';

decreaseButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
    }
});

let counter = 0;
increaseButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
});

countercontainer.append(decreaseButton, increaseButton, resetButton);
document.body.appendChild(countercontainer);