console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

var size = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for (let i = 0; i < size; i++) {
  var output = '';
  for (let j =0; j < size - i; j++) output += ' ';
  for (let k = 0; k <= i; k++) output += '#';
  console.log(output);
}
