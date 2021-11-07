function addSquare (){
    
let body = document.body;
    
//create a new div
let newDiv = document.createElement('div');

//add the elements to the div
newDiv.setAttribute('class','square');

//declaring the variable  element 
document.getElementById('squares-wrapper').appendChild(newDiv);


}
function removeSquare(){
    
document.getElementsByClassName('square')[0].remove('div');
    
}
