// Get the text input field
const textInput = document.getElementById('text-input');

// Get the virtual keyboard container
const keyboardContainer = document.getElementById('keyboard');

// Define the keys of the virtual keyboard
const keys = [  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  [' ', 'Backspace']
];

// Create the virtual keyboard
function createKeyboard() {
  for (let i = 0; i < keys.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < keys[i].length; j++) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.textContent = keys[i][j];
      if (keys[i][j] === 'Backspace') {
        key.addEventListener('click', () => {
          textInput.value = textInput.value.slice(0, -1);
        });
      } else {
        key.addEventListener('click', () => {
          textInput.value += keys[i][j];
        });
      }
      row.appendChild(key);
    }
    keyboardContainer.appendChild(row);
  }
}

// Call the createKeyboard() function
createKeyboard();
