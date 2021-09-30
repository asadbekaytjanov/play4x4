window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
let ids = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6", "btn-7", "btn-8", "btn-9", "btn-10", "btn-11", "btn-12", "btn-13", "btn-14", "btn-15", "btn-16"]
let cnt=0;    
function startGame() {
 
  console.log("New game was started");
  let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  numbers = shuffle(numbers);
  document.getElementById("cnt").innerText = cnt;
  for(let i=0; i<16; i++){
    if(numbers[i]==16){
    document.getElementById("btn-"+(i+1)).innerText="";
    continue;
  } 
  document.getElementById("btn-"+(i+1)).innerText=numbers[i];
  }
    
   for (let i=0; i<16; i++){
      document.getElementById(ids[i]).onclick = function(){
        
         document.getElementById("cnt").innerText = cnt;
          let m = Math.floor(i/4);
          let n = i%4;
          if (n >= 1 && numbers[m*4+(n-1)] == 16){
              numbers = swap(numbers, i, m*4+n-1);
          }
          if (n <= 2 && numbers[m*4+(n+1)] == 16){
              numbers = swap(numbers, i, m*4+n+1);
          }
          if (m >= 1 && numbers[(m-1)*4+n] == 16){
              numbers = swap(numbers, i, (m-1)*4+n);
          }
          if (m <= 2 && numbers[(m+1)*4+n] == 16){
              numbers = swap(numbers, i, (m+1)*4+n);
          }
          
          document.getElementById("cnt").innerText = cnt;
          let k=1;
          for (let i=0; i<16; i++){
              if (numbers[i] != k) break;
              k++;
            }
         if(k==17){
      alert("QUTLIQLAYMAN SIZ OYIN JEN'IMPAZI BOLDIN'IZ!!!!!");
    }
  }
  function swap(numbers, i, j){
    numbers[j] = numbers[i];
    document.getElementById(ids[j]).innerText = numbers[i];
    numbers[i] = 16; 
    document.getElementById(ids[i]).innerText = "";
    cnt++;
    return numbers;
}
}


}


// other function 

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);
