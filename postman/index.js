const form = document.querySelector('form');
const urlInput = document.querySelector('#url-input');
const methodSelect = document.querySelector('#method-select');
const requestData = document.querySelector('#request-data');
const response = document.querySelector('#response');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const url = urlInput.value;
    const method = methodSelect.value;
    const data = requestData.value;

    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (method === 'POST') {
            options.body = data;
        }

        const res = await fetch(url, options);
        const json = await res.json();

        response.textContent = JSON.stringify(json, null, 2);
    } catch (error) {
        console.error(error);
        response.textContent = 'Error occurred: ' + error.message;
    }
});


