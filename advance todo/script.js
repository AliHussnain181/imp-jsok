let records = [];
const form = document.querySelector('form');
const addBtn = document.querySelector('#add-btn');
const filters = document.querySelector('#filters');
const searchInput = document.querySelector('#search');
const sortSelect = document.querySelector('#sort');
const applyFiltersBtn = document.querySelector('#apply-filters-btn');
const resetFiltersBtn = document.querySelector('#reset-filters-btn');
const recordsTable = document.querySelector('#records');

function renderRecords(records) {
  recordsTable.innerHTML = '';

  records.forEach((record, index) => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = record.title;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = record.description;
    row.appendChild(descriptionCell);

    const actionsCell = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
      editRecord(index);
    });
    actionsCell.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteRecord(index);
    });
    actionsCell.appendChild(deleteBtn);

    row.appendChild(actionsCell);

    recordsTable.appendChild(row);
  });
}

function addRecord(event) {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const descriptionInput = document.querySelector('#description');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === '' || description === '') {
    alert('Please fill all fields.');
    return;
  }

  const record = { title, description };

  records.push(record);

  renderRecords(records);

  titleInput.value = '';
  descriptionInput.value = '';

  alert('Record added successfully.');
}

function editRecord(index) {
  const record = records[index];
  const newTitle = prompt('Enter new title:', record.title);
  const newDescription = prompt('Enter new description:', record.description);

  if (newTitle === null || newTitle.trim() === '' || newDescription === null || newDescription.trim() === '') {
    alert('Please fill all fields.');
    return;
  }

  record.title = newTitle.trim();
  record.description = newDescription.trim();

  renderRecords(records);

  alert('Record updated successfully.');
}

function deleteRecord(index) {
  if (confirm('Are you sure you want to delete this record?')) {
    records.splice(index, 1);
    renderRecords(records);
    alert('Record deleted successfully.');
  }
}

function applyFilters() {
  let filteredRecords = records;
  const searchValue = searchInput.value.trim();
  if (searchValue !== '') {
    filteredRecords = filteredRecords.filter((record) => {
      return record.title.toLowerCase().includes(searchValue.toLowerCase()) || record.description.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  const sortValue = sortSelect.value;
  if (sortValue === 'title') {
    filteredRecords.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (sortValue === 'description') {
    filteredRecords.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  renderRecords(filteredRecords);
}

function resetFilters() {
  searchInput.value = '';
  sortSelect.selectedIndex = 0;
  renderRecords(records);
}

form.addEventListener('submit', addRecord);
applyFiltersBtn.addEventListener('click', applyFilters);
resetFiltersBtn.addEventListener('click', resetFilters);

renderRecords(records);

