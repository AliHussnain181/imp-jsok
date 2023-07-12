// Get the HTML elements
const addEntryForm = document.querySelector('.add-entry form');
const diaryEntries = document.querySelector('.diary');

// Add event listeners
addEntryForm.addEventListener('submit', addEntry);
diaryEntries.addEventListener('click', handleDiaryEntryClick);

// Define the addEntry function
function addEntry(event) {
    event.preventDefault();

    // Get the form values
    const date = addEntryForm.elements.date.value;
    const content = addEntryForm.elements.content.value;

    // Create a new entry div
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Add the date and content
    const dateHeading = document.createElement('h2');
    dateHeading.classList.add('date');
    dateHeading.textContent = date;
    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('content');
    contentParagraph.textContent = content;
    entry.appendChild(dateHeading);
    entry.appendChild(contentParagraph);

    // Add the edit and delete buttons
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    entry.appendChild(editButton);
    entry.appendChild(deleteButton);

    // Add the entry to the diary
    diaryEntries.appendChild(entry);

    // Reset the form
    addEntryForm.reset();
}

// Define the handleDiaryEntryClick function
function handleDiaryEntryClick(event) {
    const entry = event.target.closest('.entry');
    if (entry) {
        if (event.target.classList.contains('edit-button')) {
            handleEditEntry(entry);
        } else if (event.target.classList.contains('delete-button')) {
            handleDeleteEntry(entry);
        }
    }
}

// Define the handleEditEntry function
function handleEditEntry(entry) {
    // Get the date and content of the entry
    const date = entry.querySelector('.date').textContent;
    const content = entry.querySelector('.content').textContent;

    // Create a new form
    const editForm = document.createElement('form');

    // Add the date and content inputs
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date:';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('value', date);
    const contentLabel = document.createElement('label');
    contentLabel.setAttribute('for', 'content');
    contentLabel.textContent = 'Content:';
    const contentTextarea = document.createElement('textarea');
    contentTextarea.setAttribute('id', 'content');
    contentTextarea.setAttribute('name', 'content');
    contentTextarea.textContent = content;
    editForm.appendChild(dateLabel);
    editForm.appendChild(dateInput);
    editForm.appendChild(contentLabel);
    editForm.appendChild(contentTextarea);

    // Add the update and cancel buttons
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    editForm.appendChild(updateButton);
    editForm.appendChild(cancelButton);

    // Replace the entry with the form
    entry.replaceWith(editForm);

    // Add event listeners to the form
    editForm.addEventListener('submit', handleUpdateEntry);
    cancelButton.addEventListener('click', handleCancelEdit);
}

// Define the handleUpdateEntry function
function handleUpdateEntry(event) {
    event.preventDefault();

    // Get the form values
    const date = event.target.elements.date.value;
    const content = event.target.elements.content.value;

    // Create a new entry div
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Add the date and content
    const dateHeading = document.createElement('h2');
    dateHeading.classList.add('date');
    dateHeading.textContent = date;
    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('content');
    contentParagraph.textContent = content;
    entry.appendChild(dateHeading);
    entry.appendChild(contentParagraph);

    // Add the edit and delete buttons
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    entry.appendChild(editButton);
    entry.appendChild(deleteButton);

    // Add the entry to the diary
    event.target.closest('.entry').replaceWith(entry);
    diaryEntries.appendChild(entry);
}

// Define the handleCancelEdit function
function handleCancelEdit(event) {
    event.preventDefault();

    // Get the entry
    const editForm = event.target.closest('form');
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Get the date and content of the entry
    const date = editForm.elements.date.value;
    const content = editForm.elements.content.value;

    // Add the date and content
    const dateHeading = document.createElement('h2');
    dateHeading.classList.add('date');
    dateHeading.textContent = date;
    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('content');
    contentParagraph.textContent = content;
    entry.appendChild(dateHeading);
    entry.appendChild(contentParagraph);

    // Add the edit and delete buttons
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    entry.appendChild(editButton);
    entry.appendChild(deleteButton);

    // Replace the form with the entry
    editForm.replaceWith(entry);
}

// Define the handleDeleteEntry function
function handleDeleteEntry(entry) {
    // Remove the entry from the diary
    entry.remove();
}