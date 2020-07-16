
// Set tab size styles

const setTabSizeStyles = (size, checkPreset = false) => {
	const loc = window.location
	const search = new URLSearchParams(loc.search)
	if (checkPreset && search.has('ts')) {
		return;
	}

	if (size !== 8 || search.get('ts') !== null) {
		search.set('ts', size);
		window.history.replaceState(null, '', '?' + search.toString() + loc.hash)
	}
	Array.from(document.querySelectorAll('[data-tab-size]')).forEach((el) => {
		el.dataset.tabSize = size;
	})
}

// Set tab size from settings on load
chrome.storage.sync.get({
	tabSize: 8
}, items => setTabSizeStyles(items.tabSize, true));

// Update tab style if the setting updates
chrome.storage.onChanged.addListener(items => {
	if(items.tabSize) {
		setTabSizeStyles(items.tabSize.newValue);
	}
});
