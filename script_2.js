let nbr = "";
  nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr)
{
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}

console.log(`Le résultat est : ${fact(nbr)}`);
