// FIZZ BUZZ - 100 Numeros

// 3 6 9 12 .. FIZZ
// 5 10 15 20 ... BUZZ
// 15 30 45 ... FIZZBUZZ

for(let i = 1; i <100; i++){
   if(i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FIZBUZZ !!!`);  
   } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
   } else if (i % 3 === 0) {
    console.log(`${i} fizz`)
   }
}