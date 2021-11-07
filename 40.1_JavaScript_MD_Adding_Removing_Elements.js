function addSquare (){
    
let body = document.body;
    
//create a new div
let newDiv = document.createElement('div');

//setting elements to the div
newDiv.setAttribute('class','square');

//inserting elements to the div
document.getElementById('squares-wrapper').appendChild(newDiv);


}

// removing squares 
function removeSquare(){
    
document.getElementsByClassName('square')[0].remove('div');
    
}
