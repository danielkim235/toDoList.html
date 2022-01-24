function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {   
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;     
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);

function updateList(myArray,listName) {
  
 
  
 
  listElement = document.querySelector(listName);
  listElement.innerHTML = ""
  numberOfListItems = myArray.length;
  let listItem;
  let i; 

  for (i = 0; i < numberOfListItems; ++i) {
      
      listItem = document.createElement('li');

      
      listItem.innerHTML = myArray[i];

      
      listElement.appendChild(listItem);
  }
}



