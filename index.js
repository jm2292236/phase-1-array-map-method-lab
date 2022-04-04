// Testing data
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => { 
    return tutorials.map(function (title, index) { 
        // Converts title into an array of words
        const wordsArray = title.split(' ');
        let finalString = '';
          
        // Capitalize first letter of each word
        for (let i = 0; i < wordsArray.length; i++) {
            finalString += wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
            if (finalString.length < title.length)
                finalString += ' ';
        }

        return finalString;
    })
};

// test
// console.log('*** Call the function ***')
// console.log(titleCased());
