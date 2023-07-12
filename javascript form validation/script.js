// Get form and inputs
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Get error message elements
const nameErrorMessage = document.querySelector('#name-error');
const emailErrorMessage = document.querySelector('#email-error');
const messageErrorMessage = document.querySelector('#message-error');

// Function to validate name input
const validateName = () => {
  if (nameInput.value.trim() === '') {
    nameErrorMessage.innerText = 'Please enter your name.';
    nameErrorMessage.style.display = 'block';
    nameInput.classList.add('error');
    return false;
  } else {
    nameErrorMessage.innerText = '';
    nameErrorMessage.style.display = 'none';
    nameInput.classList.remove('error');
    return true;
  }
};

// Function to validate email input
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailErrorMessage.innerText = 'Please enter your email address.';
    emailErrorMessage.style.display = 'block';
    emailInput.classList.add('error');
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailErrorMessage.innerText = 'Please enter a valid email address.';
    emailErrorMessage.style.display = 'block';
    emailInput.classList.add('error');
    return false;
  } else {
    emailErrorMessage.innerText = '';
    emailErrorMessage.style.display = 'none';
    emailInput.classList.remove('error');
    return true;
  }
};

// Function to validate message input
const validateMessage = () => {
  if (messageInput.value.trim() === '') {
    messageErrorMessage.innerText = 'Please enter your message.';
    messageErrorMessage.style.display = 'block';
    messageInput.classList.add('error');
    return false;
  } else {
    messageErrorMessage.innerText = '';
    messageErrorMessage.style.display = 'none';
    messageInput.classList.remove('error');
    return true;
  }
};

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Validate form inputs
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  // If all inputs are valid, submit the form
  if (isNameValid && isEmailValid && isMessageValid) {
    // Submit form to backend API or send email
    // ...

    // Show success message
    const successMessage = document.querySelector('#success-message');
    successMessage.classList.remove('hidden');

    // Clear form inputs
    contactForm.reset();
  }
};

// Add event listener to form submit button
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', handleFormSubmit);
