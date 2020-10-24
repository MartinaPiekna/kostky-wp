import './style.css';
import './index.html';

//roll a random number form 1 to 6
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//create a dice each one with its button
const Dice = (props) => {
  const outerElm = document.createElement('div');
  outerElm.className = 'dice';
  const innerElm = document.createElement('div');
  innerElm.className = `dice__side dice__side--${props.side}`;
  const button = document.createElement('button');
  button.className = 'btn btn--small roll-btn';
  button.textContent = 'hodit';
  // click event to roll and show a random number(side) on a dice
  button.addEventListener('click', () => {
    innerElm.className = `dice__side dice__side--${roll()}`;
  });
  outerElm.appendChild(innerElm);
  outerElm.appendChild(button);
  return outerElm;
};

//append dices to the app elm
const app = document.querySelector('#app');
const diceRow = document.querySelector('#dice-row');
app.appendChild(diceRow);

//create 6 dices
let count = 1;
while (count <= 6) {
  diceRow.appendChild(Dice({ side: roll() }));
  count++;
}
