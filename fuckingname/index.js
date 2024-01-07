const nomeElem = document.getElementById("nome");
const outElem = document.getElementById("output");

const excludedWords = ["de", "e"];

nomeElem.oninput = () => {
  const rawName = nomeElem.value;
  const splitName = rawName.split(" ").map((n) => {
    if (excludedWords.includes(n.toLowerCase())) {
      return n;
    }
    if (n.length == 0) {
      return "";
    }
    if (n.length <= 4) {
      return "Fuck";
    }
    return ["Fuck", n.substring(4)].join("");
  });
  outElem.innerText = splitName.join(" ");
};
