let user_input = document.querySelector(".search input");
let info_text = document.querySelector(".info-text");
document.querySelector("ul").style.display = "none";
let audio;

user_input.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value) {
    search(e.target.value);
  }
});

user_input.addEventListener("focus", () => {
	document.querySelector("ul").style.display = "none";
	info_text.style.color = "grey"; 
    info_text.innerHTML =
      "Type any existing word and press enter to get meaning, example, synonyms, etc.";
})

function showData(result) {
	const last_meaning = result[0].meanings.length - 1,
		last_phonetic = result[0].phonetics.length - 1,
		example = result[0].meanings[last_meaning].definitions[0].example,
		synonyms = document.querySelector(".synonyms .list");
	audio = new Audio(`${result[0].phonetics[last_phonetic].audio}`)
	// console.log(result);
	document.querySelector("ul").style.display = "block";
	document.querySelector(".word .details p").innerHTML = result[0].word;
	document.querySelector(
    ".word .details span"
  ).innerHTML = `${result[0].meanings[last_meaning].partOfSpeech} / ${result[0].phonetics[last_phonetic].text}`;
  document.querySelector(".meaning .details span").innerHTML = `${result[0].meanings[last_meaning].definitions[0].definition}`
  if (example === undefined) {
    document.querySelector(".example").style.display = "none";
  } else {
    document.querySelector(".example").style.display = "block";
    document.querySelector(".example .details span").innerHTML =
      example;
  }

	if (result[0].meanings[last_meaning].synonyms[0] == undefined) {
		synonyms.parentElement.style.display = "none";
	} else {
		synonyms.parentElement.style.display = "block";
		synonyms.innerHTML = "";
		for (let i = 0; i < 3; i++) {
      let item = `<span onclick="search_synonyms('${result[0].meanings[last_meaning].synonyms[i]}')">${result[0].meanings[last_meaning].synonyms[i]}</span>`;
      synonyms.insertAdjacentHTML("beforeend", item);
    }
	}
  
}
function search(word) {
    info_text.style.color = "grey"; 
    info_text.innerHTML = `Searching : <b>${word}</b>...`;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (response.status === 404) {
        info_text.style.color = "red";
        info_text.innerHTML = `Not found : <b>${word}</b>`;
      } else {
        return response.json();
      }
    })
    .then((result) => {
      if (result) {
        info_text.style.color = "green";
        info_text.innerHTML = `Searched : <b>${word}</b>`;
        user_input.value = "";
        showData(result);
      }
    });
}

function search_synonyms(word) {
	search(word);
}

document.querySelector(".fa-volume-up").addEventListener("click", () => {
	audio.play();
});
