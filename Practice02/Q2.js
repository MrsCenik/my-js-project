function isAnagram(first,second)
{
  first = ''+first;
  second = ''+second;

  
  
  var a=first.toLowerCase();
  
  var b=second.toLowerCase();

  a=a.split("").sort().join("");
  b=b.split("").sort().join("");

  return a===b;
}

console.log(isAnagram(1234,43201))