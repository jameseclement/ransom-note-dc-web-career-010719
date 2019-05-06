function canBuildNote(magazine, note) {
  let hash = {};
  magazine.forEach(letter => {
    if (!hash[letter]) {
      hash[letter] = 1;
    } else {
      hash[letter] += 1;
    }
  });

  let targetLetters = note.split("");
  for (let i = 0; i < targetLetters.length; i++) {
    if (hash[targetLetters[i]] === 0) {
      return false;
    } else {
      hash[targetLetters[i]]--;
    }
  }
}
