const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

// Zazwyczaj nie wypisujemy faktów tak jak poniżej- jako zmienna. W takiej sytuacji korzystamy z API.
const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

const day = new Date()
const today = day.toLocaleDateString("pl", { weekday: 'long' })
// console.log(day.toLocaleDateString("pl", { weekday: 'short' }))   - zapis srócony nazwy dnia

currentDay.textContent = today

const showFact = () => {
	const number = Math.floor(Math.random () * (facts.length-1))

	funFact.textContent = facts[number]
}

showFact()