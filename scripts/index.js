try {
	navigator.shareTarget.addEventListener('target', async (event) => {
		const data = await event.data.text();
		handleSharedText(data);
	});

	function handleSharedText(text) {
		alert(text)
	}
} catch (error) {
	alert('Sharing doesn\'t work in your browser')
}

