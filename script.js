function countWords() {
    var text = document.getElementById('inputText').value;
    
    // Remove punctuation and convert text to lowercase
    text = text.replace(/[^\w\s]/gi, '').toLowerCase();
    
    var words = text.split(/\s+/);
    var wordCount = {};
    
    // Count the occurrences of each word
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
    
    // Sort the word count in descending order of frequency
    var sortedWords = [];
    for (var word in wordCount) {
      sortedWords.push([word, wordCount[word]]);
    }
    sortedWords.sort(function(a, b) {
      return b[1] - a[1];
    });
    
    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (var i = 0; i < sortedWords.length; i++) {
      var word = sortedWords[i][0];
      var count = sortedWords[i][1];
      resultDiv.innerHTML += word + ': ' + count + '<br>';
    }
  }
  