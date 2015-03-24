// Fill in the regular expressions
print();
// car and cat
verify(/car|cat/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// pop and prop
verify(/pop|prop/,
       ["pop culture", "mad props"],
       ["plop"]);

// ferret, ferry, and ferrari
verify(/[ferret|ferry|ferrari]/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// any word ending in ious
verify(/[ious]\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness", "blahiouslah"]);

// a whitespace character followed by a dot, comma, colon, or semicolon
verify(/\s(.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

// a word longer than six letters
verify(/\d{6}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// a word without the letter e
verify(/[^e]/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      print("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      print("Unexpected match for '" + s + "'");
  });
}

print();
