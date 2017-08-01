function countWords(inputWords) {
  // Arguments to the callback function inside reduce:
  // accumulator, currentValue, currentIndex, array
	return inputWords.reduce((acc, curr, currIndex, array) =>{

    if (!acc[curr])
      acc[curr] = 0

    acc[curr]++

    return acc
  },{})
}

module.exports = countWords

// the original solution is a bit different:
// function countWords(arr) {
// 	return arr.reduce(function(countMap, word) {
// 		countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
// 		return countMap
// 	}, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords
