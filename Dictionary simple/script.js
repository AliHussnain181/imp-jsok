const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const sourceLang = document.querySelector('#source-lang');
const targetLang = document.querySelector('#target-lang');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const word = input.value;
	const source = sourceLang.value;
	const target = targetLang.value;
	searchWord(word, source, target);
});

async function searchWord(word, source, target) {
	try {
		const response = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=${source}|${target}`);
		const data = await response.json();
		if (!data.responseData) {
			resultDiv.innerHTML = `<p>No translation found for <strong>${word}</strong>.</p>`;
			return;
		}
		const { responseData: { translatedText } } = data;
		resultDiv.innerHTML = `
			<h2>${word}</h2>
			<p>${translatedText}</p>
		`;
	} catch (error) {
		console.error(error);
		resultDiv.innerHTML = `<p>An error occurred while searching for <strong>${word}</strong>.</p>`;
	}
}
