function stringSubstring (word, text){
    let textWords = text.toLowerCase().split(` `);

    let string = word.toLowerCase()
if(textWords.includes(string)){
    console.log(word);
}else{
    console.log(`${word} not found!`);
}
    console.log();
}
stringSubstring('javascript',
'JavaScript is the best programming language');
// stringSubstring('python',
// 'JavaScript is the best programming language');