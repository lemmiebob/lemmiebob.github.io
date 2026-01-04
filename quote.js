const quotes = [
"You have the cutest nose",
"Your rosy cheeks are the cutest",
"Im so happy you are a part of my life",
"You are the prettiest princess",
"MWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAHMWAH",
"MWAH. That was for your nose",
"MWAH. That was for your forehead",
"MWAH. That was for your tummy",
"MWAH. That was for your cheeks",
"I love you so much arfa",
"Your hair is so pretty when its up and when its down, when its wet and when its dry",
"Just telepathically sucked your toes",
"OMNOMNOMNOMNOMNOMNOMNOM. That was for your cute toes",
"You are my sweet baby",
"Thinking about you rn my baby",
"I cant wait to see you again",
"Telepathically just bent you over and spanked you",
"Lets cuddle under the blankets together baby",
"I want to be in the spa mwahing again",
"Privy, rhythm, audio, canoe :P",
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