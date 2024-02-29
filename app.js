const input = document.querySelector("#fruit");
const suggestions = document.querySelector(
	".suggestions ul"
);

const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

function search(str) {
	let results = [];
	results = fruit.filter((fruitName) =>
		fruitName.toLowerCase().includes(str.toLowerCase())
	);
	return results;
}

function highlightMatches(result, inputVal) {
	const boldedResult = result
		.split("")
		.map((letter, index) =>
			inputVal.toLowerCase().includes(letter.toLowerCase())
				? `<strong>${letter}</strong>`
				: letter
		)
		.join("");
	return boldedResult;
}

function searchHandler(e) {
	const inputValue = e.target.value;
	const results = search(inputValue);
	showSuggestions(results, inputValue);
}

function showSuggestions(results, inputVal) {
	const suggestionsList = document.getElementById(
		"suggestions-list"
	);
	const html = results
		.map(
			(result) =>
				`<li>${highlightMatches(result, inputVal)}</li>`
		)
		.join("");
	suggestionsList.innerHTML = html;

	if (inputVal.trim() === "") {
		suggestions.style.display = "none";
	} else {
		suggestions.style.display =
			results.length > 0 ? "block" : "none";
	}

	const listItems = suggestionsList.querySelectorAll("li");
	listItems.forEach((item) => {
		item.addEventListener("mouseover", () => {
			item.classList.add("highlighted");
		});
		item.addEventListener("mouseout", () => {
			item.classList.remove("highlighted");
		});
	});
}

function useSuggestion(e) {
	if (e.target.tagName === "LI") {
		input.value = e.target.textContent;
		suggestions.style.display = "none";
	}
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
