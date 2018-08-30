//for ([initialization]; [condition]; [iteration]) {
//  [loopBody];
//}

//initialization: An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword
//condition: An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed
//iteration: A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to its end
//loopBody: Code which runs on every iteration as long as the condition evaluates to true
//Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

function forLoop(array){
  for (let i=0;i<25; i++){
    console.log( "I am "+i+" strange loop.")
   
  }
}