// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
    const words = text.split(' ').map(x => x.replaceAll(/[^a-zA-Z'-]/g, '')).filter(x => /^[a-zA-Z'-]+$/.test(x));
    const wordsObj = {};
    words.forEach(word => {
        if(/^\W|_$/.test(word)){
            return;
        }
        if(wordsObj[word.toLowerCase()]){
            wordsObj[word.toLowerCase()] += 1;
            return;
        }
        wordsObj[word.toLowerCase()] = 1;
    });

    const wordsSorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);    
    return wordsSorted.slice(0, 3).map(x => x[0]);
}

const output = topThreeWords(`  //wont won't won't `);

console.log('output :>> ', output);

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// "In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income."

// --> ["a", "of", "on"]


// "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// --> ["e", "ddd", "aa"]


// "  //wont won't won't"

// --> ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.