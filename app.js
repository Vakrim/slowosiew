const input = document.getElementById("pattern");
const errorEl = document.getElementById("error");
const countEl = document.getElementById("count");
const resultsEl = document.getElementById("results");

function render() {
  const pattern = input.value;
  errorEl.textContent = "";
  input.classList.remove("invalid");

  let words = WORDS;
  if (pattern) {
    let re;
    try {
      re = new RegExp(pattern, "iu");
    } catch (e) {
      input.classList.add("invalid");
      errorEl.textContent = e.message;
      return;
    }
    words = WORDS.filter((w) => re.test(w));
  }

  countEl.textContent = `${words.length} / ${WORDS.length} słów`;
  resultsEl.innerHTML = words.map((w) => `<div>${w}</div>`).join("");
}

input.addEventListener("input", render);
render();
