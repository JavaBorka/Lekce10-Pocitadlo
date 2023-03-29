const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
  console.log('Definovali jsme funkci update counter')
};


let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value += 1;
    // value = value + 1
    updateCounter(value);
    console.log('Aktivní tlačítko btnUp, které připočítá hodnotu 1')
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    // value = value - 1
    updateCounter(value);
    console.log('Aktivní tlačítko btnDown, které odečítá hodnotu 1')
  }
});

updateCounter(value)
console.log('Zavolali jsme funkci updateCounter')

