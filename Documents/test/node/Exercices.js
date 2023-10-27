// define a function's return a voyels in a phrase and there number

// function voyelsInPhrase(mots){
//     const wordFromVoyels = mots;
//     const frenchVoyelles = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
//     let numberOfVoyels = [];
//     for(let i in frenchVoyelles){
//         if(wordFromVoyels.includes(frenchVoyelles.at(i))){
//             numberOfVoyels.push(frenchVoyelles.at(i));
//         }
//     }
//    console.log(` the voyels in this phrase is ${numberOfVoyels}, there are ${numberOfVoyels.length}`);
// }

    // e.g Exute function voyelsPhrase
//voyelsInPhrase('mangerioayuopg');

// exo2 Return one digit from un number

// function OnesDigit(nombre){
//     const number = nombre.toString()
//     for(let i = 1; i< number.length -1;i++){
//         let myIndex =Math.floor(Math.random()* ((number.length -1) - 1 +1) + 1) ;
//         console.log(number.at(myIndex));
//     break 
//         i++   
//     }
// }

// OnesDigit(123451);

// define  function's take 2 numbers and return their mean

// function meanAvg(a,b){
//     const numbers = [a,b];
//     const sum = numbers.reduce((a,b)=>{
//         return a+b;
//     })

//     const avg = sum / number.length ;
//     console.log (avg);
// }

//eg: Execute function

// meanAvg(8,2);

// define a fuction's take an Integer and convert it on seconds.

// function minInSecond(minute){
//     const seconds = minute * 60;
//     console.log(`${minute} equals ${seconds} secs and ${secHour}` )
// }
// // eg, execute function
// minInSecond(160);

// define function's taks age in year and convert it in days

// function dateYearInDay(dateInyear){
//     const dateInDay = dateInyear * 365;
//     console.log(`Your age in day is ${dateInDay}`);
// }

// dateYearInDay(28);

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function dashInsert(number){
//     const numberArray = number.toString();
//     numberArray.split();
//     let myArray = [];
//     for(let i = 0;i< numberArray.length; i++){
//         if(numberArray.at(i) % 2 == 0  ){
//             myArray.push(numberArray.at(i));
//             myArray.push('-');
//         }else{
//             myArray.push(numberArray.at(i)) 
//         }
        
//     }
//      let arrayLength = myArray.length -1;
//      if(myArray[arrayLength] == ('-')){
//         myArray.pop();
//      }
//      console.log(myArray.join(' '))
// }



// dashInsert(698487634)

// write a function that accepts 2 strings and return the last occurance of the second  string in the first string

function occurenceOfSecondString(string1, string2){
    let word1 = string1.toString();
    let word2 = string2.toString();
  let firstIndex = word1.indexOf(word2); 
  let secondIndex = word1.indexOf(word2,firstIndex +1);
 return console.log(secondIndex);
}

occurenceOfSecondString('aite eu aha tait','it');


