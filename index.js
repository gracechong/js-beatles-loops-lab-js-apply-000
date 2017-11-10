function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;

  while (i < facts.length) {
    array.push(facts[i] + "!!!");

    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var result = [];

  var i = 0;
  do {
    i += 1;
    result.push("I love the Beatles!" + " ")
  } while (i < 15);
  return result;
}
