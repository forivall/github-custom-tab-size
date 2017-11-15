const title = document.querySelector('h1 .tab-size-display');
const tabSize = document.querySelector('.tab-size');

// Save tab size
showTabSize = () => {
	title.innerText = String(tabSize.value);
	chrome.storage.sync.set({
		tabSize: tabSize.value
	});
};

// Bind save handler to input
tabSize.addEventListener('input', showTabSize);

// Load previously saved settings
document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get({
		tabSize: 8
	}, items => {
		tabSize.value = items.tabSize;
		title.innerText = String(items.tabSize);
	});
});
