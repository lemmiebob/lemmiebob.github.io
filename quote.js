const quotes = [
"You have the cutest nose",
"Your rosy cheeks are the cutest",
"You are the prettiest princess",
"Im so happy you are a part of my life",
"MWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAH",
"MWAH. That was for your nose",
"MWAH. That was for your forehead",
"MWAH. That was for your tummy",
"MWAH. That was for your cheeks",
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
	
	// return randomIndex;
	return quotes[Math.abs(randomIndex)];
}