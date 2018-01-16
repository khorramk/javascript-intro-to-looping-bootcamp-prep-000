function forLoop(array){
  
  for (var i=0; i < 25; i++){
     if (i === 1){
       array.push("I am 1 strange loop.");
       
     }else{
       array.push(`i am ${i} strange loops.`);
       
     }
     
    
  }

  return array;
}

function whileLoop(nubmer){
  while (number > 0){
    console.log(--number);
    return "done";
  }
}

function doWhileLoop(array){
  do{
    return array;
  }
  
}