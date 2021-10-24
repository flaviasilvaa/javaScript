let result = ''; // Do not change this. You assign to this variable within the switch statement.
let errorType = "page";

switch (errorType) {
  case "username":
    result = "That username is incorrect, please try again.";
    break;
  case "password":
    result = "Incorrect password, please try again.";
    break;
  case "page":
    result = "Sorry this page doesn't exist.";  
    break;
  default:
    result = "Error message unknown";
}
console.log(result)
console.log(result);  
