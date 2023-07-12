const chatBody = document.querySelector('.chat-body');
const inputField = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button');

function createBotMessage(text) {
  const botMessageElement = document.createElement('div');
  botMessageElement.classList.add('bot-message');
  botMessageElement.innerHTML = `
    <p>${text}</p>
  `;
  chatBody.appendChild(botMessageElement);
}

function createUserMessage(text) {
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('user-message');
  userMessageElement.innerHTML = `
    <p>${text}</p>
  `;
  chatBody.appendChild(userMessageElement);
}

function handleInput() {
  const inputText = inputField.value;
  createUserMessage(inputText);
 
// Clear the input field
inputField.value = '';

// Simulate bot response after 1 second
setTimeout(() => {
createBotMessage('Sorry, I am just a demo bot and do not have any functionality yet.');
}, 1000);
}

sendButton.addEventListener('click', handleInput);

inputField.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
handleInput();
}
});