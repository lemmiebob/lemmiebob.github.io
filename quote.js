const quotes = [
"Hey",
"Arfa",
"test",
];

function getRandomDailyQuote() {
	const today = new Date();
	
	 // Apply offset for testing
    const testDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13);
	
	const start = new Date(testDate.getFullYear(), 0, 0);
	const diff = testDate - start;
	const oneDay = 100 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);
	
	//const index = dayOfYear % quotes.length; // Cycling
	const seed = dayOfYear;
    const randomIndex = Math.floor((Math.sin(seed) * 10000) % (quotes.length - 1));
	
	return randomIndex;
	return quotes[Math.abs(randomIndex)];
}