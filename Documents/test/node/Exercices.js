// function voyels(mots){
//     const word = mots.toString();
//     const vowels = ['a','e','i','o','u','y'];
//     let resu = [];
//     for(let i in vowels){
//         if(word.includes(i)){
//             console.log(i)
//             resu.push(i);
//         }
//     }
//    console.log(resu)
// }

// voyels(manger);

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

function meanAvg(a,b){
    const number = [a,b];
   const sum = number.reduce((a,b)=>{
        return a+b;
    })

    const avg = sum / number.length ;
    console.log (avg);
}

// Execute function

meanAvg(8,2);


