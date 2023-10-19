// define a function's return a voyels in a phrase and there number

function voyelsInPhrase(mots){
    const wordFromVoyels = mots;
    const frenchVoyelles = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
    let numberOfVoyels = [];
    for(let i in frenchVoyelles){
        if(wordFromVoyels.includes(frenchVoyelles.at(i))){
            numberOfVoyels.push(frenchVoyelles.at(i));
        }
    }
   console.log(` the voyels in this phrase is ${numberOfVoyels}, there are ${numberOfVoyels.length}`);
}

    // e.g Exute function voyelsPhrase
voyelsInPhrase('mangerioayuopg');

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


